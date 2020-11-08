import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public LoginForm:any={
    password:'',
    email:'',
  }
  renden=true;
  constructor(public route:Router,public httpPost:HttpRequestService) { }

  ngOnInit(): void {
  }
  doLogin(){
    let api = 'api/login'
    this.httpPost.axiosPost(api,this.LoginForm).then((response:any)=>{
      // console.log(response.data)
      if(response.data.result){
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('user',response.data.user)
        this.route.navigate(['/']);
      }else{
        this.renden=false
      }
    })
  }
  doRegister(){
    this.route.navigate(['/register'])
  }
}
