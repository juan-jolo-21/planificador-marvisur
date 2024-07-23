import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserManageService {
  private API_SERVER: string = 'http://localhost:4000';
  constructor(private http: HttpClient) {

  }

  postUser(someNewUser : User){
    return this.http.post<any>(`${this.API_SERVER}/users`,someNewUser)
  }

}
