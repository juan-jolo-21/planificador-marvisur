import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private AUTH_SERVER: string = 'http://localhost:3000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  //token para mantener abierto la app
  private currentUserJSONData : any; 
  private token : string | null = localStorage.getItem('token') ;
  // private token = '';
 
  constructor(private http: HttpClient) {
    this.currentUserJSONData = JSON.parse(localStorage.getItem('currentUser') as string);
    this.currentUserSubject = new BehaviorSubject<User>(this.currentUserJSONData);
    this.currentUser = this.currentUserSubject.asObservable();
 }

 public get currentUserValue(): User {
    return this.currentUserSubject.value;
 }

 login(someUser : User) {
    console.log('prueba de inicio token');
    // console.log(localStorage.getItem('token'));
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/login`, someUser)
      . pipe(tap(
        (jwtResponse: JwtResponse) => {
        // Almacenar el usuario y el token JWT en el almacenamiento local
        let anotherUser, 
        tokenAnotherUser, 
        timestampAnotherUser :  any;
        if (jwtResponse) {
          anotherUser = {
            id: jwtResponse.id,
            user_type: jwtResponse.user_type,
            email: jwtResponse.email,
            employee: jwtResponse.employee
          }
          tokenAnotherUser= jwtResponse.accessToken;
          timestampAnotherUser= jwtResponse.expiresIn;
        }else{
          anotherUser = {
            id: 0,
            name: 'not user yet, please verify your credentials'
          };
          tokenAnotherUser = 'no token'; 
          timestampAnotherUser = 0;
        }
        this.token= tokenAnotherUser;
        // console.log(this.token);
        localStorage.setItem('currentUser', JSON.stringify(anotherUser));
        localStorage.setItem('token', tokenAnotherUser as string);
        localStorage.setItem('timestamp', timestampAnotherUser);

      }));
 }

 logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    localStorage.removeItem('timestamp');
    const user : any = null ;
    //this.currentUserSubject.next(user);
 }
 
 public isAuthenticaded(): boolean {
  if (this.token != null)
    return this.token.length>0;
  else
    return false;
 }


public getCurrentUserJSONData() : any {
  return this.currentUserJSONData;
}

public getUserType(): string {
  return this.currentUserJSONData.user_type;
}

public getUserNameData():any {
  return this.currentUserJSONData.employee.person;
}

public getCompleteName() : string {
  return `${this.getUserNameData().last_name_1} ${this.getUserNameData().last_name_2}, ${this.getUserNameData().name}`;
}


public userTypeLoggining (userType: string) : boolean {

  return userType === this.getUserType();

}


//  public userTypeLoggining(userType: string) : boolean{
//   switch(userType){
//     case "admin":
//     case "register":
//     case "manloader":
//       return true;
//       break;
//     default:
//       return false;
//       break;
//   }
//  }

  // authsubject = new BehaviorSubject<boolean>(false);
  // private token: string | undefined | null ;
  
  // constructor(private httpClient: HttpClient) { }





  // private saveToken(token: string, expiresIn: string): void {
  //   localStorage.setItem("ACCESS_TOKEN", token);
  //   localStorage.setItem("EXPIRES_IN", expiresIn);
  //   this.token = token;
  // }

  // private getToken(): string | undefined | null {
  //   if (!this.token) {
  //     this.token = localStorage.getItem("ACCESS_TOKEN");
  //   }
  //   return this.token;
  // }
}
