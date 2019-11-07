import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { User } from './Models/User';
import { Entry } from './Models/Entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string = "http://localhost:8081/";



  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}users/sign-up`, user);
  }


  login(user: User): Observable<any>{
    return this.http.post<User>(`${this.url}login`, user, {observe: 'response'});
  }
  
  public getUsers(){
    //return this.httpClient.get(this.REST_API_SERVER + "/entries");
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.get<User[]>(`${this.url}users`, headers);
  }

  public deleteUser(id:string){
    //return this.httpClient.get(this.REST_API_SERVER + "/entries");
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.delete(`${this.url}users/`+id, headers);
  }


  //Entrys
  public getEntries(){
    //return this.httpClient.get(this.REST_API_SERVER + "/entries");
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.get<Entry[]>(`${this.url}entries`, headers);
  }

  public createEntry(entry: Entry): Observable<Entry> {
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.post<Entry>(`${this.url}entries`, entry,headers);
  }

  public deleteEntry(id:string){
    //return this.httpClient.get(this.REST_API_SERVER + "/entries");
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.delete(`${this.url}entries/`+id, headers);
  }

  public updateUser(user: User, id: string): Observable<User> {
    let headers =  {headers: new  HttpHeaders({ 'Authorization': localStorage.getItem("Authorization")})};
    return this.http.put<User>(`${this.url}users/`+id, user,headers);
  }




  constructor(private http: HttpClient) { 
    }
  }
