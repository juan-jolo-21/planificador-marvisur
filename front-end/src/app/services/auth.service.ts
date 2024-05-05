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
  private token = '';
 
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
 }

 public get currentUserValue(): User {
    return this.currentUserSubject.value;
 }

 login(someUser : User) {
    
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
        console.log(this.token);
        localStorage.setItem('currentUser', JSON.stringify(anotherUser));
        localStorage.setItem('token', tokenAnotherUser as string);
        localStorage.setItem('timestamp', timestampAnotherUser);
        //this.currentUserSubject.next(anotherUser);
        console.log(localStorage.getItem('currentUser'));
        console.log(localStorage.getItem('token'));
        console.log(localStorage.getItem('timestamp'));
        //return jwtResponse;
      }));
 }

 logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    const user : any = null ;
    this.currentUserSubject.next(user);
 }
 
 public isAuthenticaded(): boolean {
  return this.token.length>0; 
 }

  // authsubject = new BehaviorSubject<boolean>(false);
  // private token: string | undefined | null ;
  
  // constructor(private httpClient: HttpClient) { }


  // login(user: User): Observable<JwtResponse> {
  //   return this.httpClient.post<JwtResponse>
  //     (`${this.AUTH_SERVER}/login`,user)
  //       .pipe(tap(
  //         (res: JwtResponse) => {
  //           if (res) {
  //             // guardar token
  //             this.saveToken(res.accessToken, res.expiresIn);
  //           }
  //         }
  //       ));
  // }

  // logout(): void {
  //   this.token = '';
  //   localStorage.removeItem("ACCESS_TOKEN");
  //   localStorage.removeItem("EXPIRES_IN");
  // }

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
