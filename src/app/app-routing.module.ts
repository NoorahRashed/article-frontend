import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommentFormComponent } from './comment-form/comment-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'article/:id', component: ArticleDetailComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: LoginComponent },
  { path: 'comment-form', component: CommentFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
