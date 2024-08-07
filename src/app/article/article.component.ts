import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../services/my-service.service';
import { MyArticle } from './my-article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article!: MyArticle;

  constructor(private myService :MyServiceService) { }

  ngOnInit(): void {
    
  }

  myAarticleget(){
    this.myService.getMyArticle(1).subscribe((data :MyArticle)=>{
      this.article=data;
    })
  }

}
