import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private AUTH_SERVER: string = 'http://localhost:3000';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  token = 'aaaa';
 
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
 }

 public get currentUserValue(): User {
    return this.currentUserSubject.value;
 }

 login(email: string, password: string) {
    
    return this.http.post<JwtResponse>(`${this.AUTH_SERVER}/login`, { email, password })
      . pipe(map(jwtResponse => {
        // Almacenar el usuario y el token JWT en el almacenamiento local
        let user :  any;
        console.log('antes de validar');
        console.log('jwtresponse only');
        console.log(jwtResponse);
        console.log('se procede a validar');
        if (jwtResponse) {
          user = {
            id: jwtResponse.dataUser.id,
            name: jwtResponse.dataUser.employee.person.name,
            email: jwtResponse.dataUser.email,
            password: password 
          };
        }else{
          user = {
            id: 0,
            name: 'not user yet'
          }
        }
        console.log('ttt');
        console.log(user);
        console.log('gggg');
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('accessToken', jwtResponse.dataUser.accessToken);
        this.currentUserSubject.next(user);
        console.log(jwtResponse);
        console.log(localStorage.getItem('currentUser'));
        return jwtResponse;
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
  //             this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
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
