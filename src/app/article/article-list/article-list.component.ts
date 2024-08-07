import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { MyArticle } from '../my-article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  Articles:MyArticle[]=[];

  constructor(private myService : MyServiceService) { }

  ngOnInit(): void {
    this.listArticles();
  }

  listArticles() {
    this.myService.getArticlesList().subscribe(
      data =>{
        this.Articles=data;
      }
    );
  }

}
