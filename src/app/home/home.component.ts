import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../Models/User';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("firstname", { static: true }) 
  firstname: ElementRef;

  @ViewChild("password", { static: true }) 
  password: ElementRef;

  displayLogin: boolean = true;
  displayUserHome: boolean = false;
  displayAdminHome: boolean = false;
  displayRegister: boolean = false;


  register() {
    const user: User = { username: this.firstname.nativeElement.value, password: this.password.nativeElement.value };
      this.httpservice.createUser(user).subscribe();
  }

  login(){
    const user: User = { username: this.firstname.nativeElement.value, password: this.password.nativeElement.value };
    this.httpservice.login(user).subscribe(response =>{
      localStorage.setItem("Authorization", response.headers.get('Authorization'));
      this.displayLogin = false;
    })
    this.localstoragecheck();
  }

  localstoragecheck() {
    console.log(localStorage.getItem("Authorization"));
  }
  

  print() {
    console.log(this.firstname.nativeElement.value+this.password.nativeElement.value)
  }

  constructor(private httpservice: HttpService) { }

  ngOnInit() {
  }

}
