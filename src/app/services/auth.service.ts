import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) { }

  

  login(username : string , password : string): Observable<any> {

    return this.http.post(`${this.baseUrl}/login`,User);
  }
  
  // subscribe(credentials: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/subscribe`, credentials);
  // }
}
