import { Component, OnInit } from '@angular/core';
// import { ArticleService } from '../servises/article.service';
import { Articlee } from './articlee';
import { AuthService } from '../servises/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  constructor(/*private myService: AuthService*/) { }

  Articles:Articlee[]=[];

  ngOnInit(): void {
    // this.sortArticle();
  }
 
  // sortArticle(){
  //   this.myService.getArticlesList().subscribe(
  //     data => {
  //       this.Articles=data;
  //     }
  //   )
  // }
  

}
