import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { ArticleComponent } from './article/article.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentComponent } from './comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './servises/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleDetailComponent,
    AddArticleComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    CommentFormComponent,
    CommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
 providers: [AuthService],
 bootstrap: [AppComponent]
})
export class AppModule { }
