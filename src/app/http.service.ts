import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "localhost:8081/";


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
      Login(user: User, callback){
        this.http.post<User>(this.url, user, this.httpOptions);
      callback("test");
      }


  


 

  constructor(private http: HttpClient) { 
    this.Login({username: "Nils", password: "123"}, function (value) {
      console.log(value);
    })
    }
  }
