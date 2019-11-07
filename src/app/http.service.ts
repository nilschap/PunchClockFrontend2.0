import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from './Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://localhost:8081/";


   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}users/sign-up`, user);
  }


  login(user: User): Observable<any>{
    return this.http.post<User>(`${this.url}login`, user, {observe: 'response'});
  }
  


 

  constructor(private http: HttpClient) { 
    }
  }
