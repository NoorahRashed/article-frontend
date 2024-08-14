import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../servises/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:String;
  password!:String;
  massage:any;


  constructor(private _router: Router,private service:AuthService) { }

  ngOnInit(): void {
  }

  gotoSignUp(){
    this._router.navigate(['signup']);
  }

  doLogin(){
    let resp = this.service.login(this.username,this.password);
    resp.subscribe(data=>{
      console.log(data)
    })
  }
}
