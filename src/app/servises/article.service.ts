import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articlee } from '../article-detail/articlee';



// @Injectable({
//   providedIn: 'root'
// })
// export class ArticleService {
//   private baseUrl= 'http://localhost:8080/article';

//   constructor(private http : HttpClient) { }

//   getArticlesList():Observable<Articlee[]>{
//     return this.http.get<Articlee[]>(this.baseUrl);
//   }
// }
