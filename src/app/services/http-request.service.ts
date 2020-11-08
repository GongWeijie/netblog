import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor() { }
public domain = "http://localhost/"
  axiosGet(api){
    return new Promise((resolve,rejects)=>{
      axios.get(this.domain+api).then(function(response){
        resolve(response)
      })
    })
  }


  axiosPost(api,data){
    return new Promise((resolve,reject)=>{
      axios.post(this.domain+api,data,
        {headers:
          {'Content-Type': 'application/json'}
        }).then(function(response){
        resolve(response)
      })
    })
  }
}
