import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public RegisterForm:any={
    name:'',
    password:'',
    email:''
  }
  constructor(public httpPost:HttpRequestService,public route:Router) { }

  ngOnInit(): void {
  }
  Register(){
      let api = 'api/register'
      this.httpPost.axiosPost(api,this.RegisterForm).then((response:any)=>{
        if(response.data.result){
          alert(response.data.msg)
          this.route.navigate(['/login']);
        }else{
          alert('邮箱已注册,请换一个！')
        }
      })

  }

  BackToLogin(){
    this.route.navigate(['login'])
  }
}
