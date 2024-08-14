import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articlee } from '../article-detail/articlee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private basearticle = 'http://localhost:8080/article';
  private baselogin = 'http://localhost:8080/login';
  private basecomment = 'http://localhost:8080/article/{id}/comment';
  private baseregister = 'http://localhost:8080/register';

  constructor(private http : HttpClient) { }

  getArticlesList():Observable<Articlee[]>{
    return this.http.get<Articlee[]>(this.basearticle);
  }

  public login(username:String , passward:String){
    const headers=new HttpHeaders({Authorizatation: 'Basic '+btoa(username+":"+passward)})
    return this.http.get(this.baselogin,{headers,responseType:'text' as 'json'});
  }

  public signup( username:String , email:String , mobilenumber:String , passward:String ){
    
  }


}
