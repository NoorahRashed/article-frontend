import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OneArticletComponent } from './article/add-article/one-articlet.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {path : '' , component : HomeComponent },
  {path : 'login' , component : LoginComponent },
  {path : 'article-list' , component : ArticleListComponent },
  {path : 'article/:id' , component : ArticleComponent },
  {path : 'add-article' , component: OneArticletComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
