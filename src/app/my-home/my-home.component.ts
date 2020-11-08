import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpRequestService } from '../services/http-request.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,public route:Router,private http:HttpRequestService) {}
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['login']);
    let api = 'api/logout'
    this.http.axiosGet(api).then((data)=>{
      console.log('退出')
    })

  }
}
