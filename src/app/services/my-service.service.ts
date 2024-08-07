import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find, Observable } from 'rxjs';
import { MyArticle } from '../article/my-article';
import { User } from '../login/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl='http://localhost:8080/article';

  constructor(private httpClient:HttpClient) { }

  getArticlesList():Observable<MyArticle[]>{
    return this.httpClient.get<MyArticle[]>(this.baseUrl);
  }
  creatArticle(article:MyArticle):Observable<MyArticle>{
  return this.httpClient.post<MyArticle>(this.baseUrl,article);
  }
  getMyArticle(articleid:number){
    return this.httpClient.get<MyArticle>(this.baseUrl);
  }
}
