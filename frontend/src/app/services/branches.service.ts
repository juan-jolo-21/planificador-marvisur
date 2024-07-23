import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Branch } from '../models/branch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  private API_SERVER: string = 'http://localhost:4000'
  constructor(private httpClient: HttpClient) {

   }

  getBranchesNames(): Observable<any> {
    return this.httpClient.get<any>(`${this.API_SERVER}/branches/names`);
  }
}
 