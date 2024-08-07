import { Component, OnInit } from '@angular/core';
import { MyArticle } from '../my-article';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-one-articlet',
  templateUrl: './one-articlet.component.html',
  styleUrls: ['./one-articlet.component.css']
})
export class OneArticletComponent implements OnInit {
  Article:MyArticle={
    articleid:null,
    author: '',
    title: '',
    body: '',
    articledate:new Date(),
    Likes: 0,
    DisLikes: 0,
    Disabled: false
  };

  constructor(private myService : MyServiceService) { }

  ngOnInit(): void {
  
  }
  onSubmit(){
    this.myService.creatArticle(this.Article).subscribe(result=>{
      console.log('Article created',result);
      this.Article={
        articleid:null,
        author: 'Norah',
        title: 'try this',
        body: "let's see what will hapend when i run this",
        articledate:new Date(),
        Likes: 0,
        DisLikes: 0,
        Disabled: false
      };
    });
  }
}
