import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../Models/User';
import { Entry } from '../Models/Entry';
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

  @ViewChild("newUserfirstname", { static: true }) 
  newUserfirstname: ElementRef;

  @ViewChild("newUserpassword", { static: true }) 
  newUserpassword: ElementRef;

  checkIn: Date; 
  checkOut: Date;
  


  users: User[] = [];
  entries: Entry[] = [];
  
  register() {
    const user: User = { id: "0",username: this.firstname.nativeElement.value, password: this.password.nativeElement.value };
      this.httpservice.createUser(user).subscribe();
  }

  newUser() {
    const user: User = { id: "0",username: this.newUserfirstname.nativeElement.value, password: this.newUserpassword.nativeElement.value };
      this.httpservice.createUser(user).subscribe();
      this.httpservice.getUsers().subscribe(users => this.users = users);
  }

  login(){
    const user: User = { id: "0", username: this.firstname.nativeElement.value, password: this.password.nativeElement.value };
    this.httpservice.login(user).subscribe(response =>{
      localStorage.setItem("Authorization", response.headers.get('Authorization'));
    })
    this.localstoragecheck();
    this.httpservice.getUsers().subscribe(users => this.users = users);
    this.httpservice.getEntries().subscribe(entries => this.entries = entries);
  }

  deleteUser(id: string) {
    console.log(id);
    this.httpservice.deleteUser(id).subscribe();
    this.httpservice.getUsers().subscribe(users => this.users = users);
  }

  updateUser(user: User, id: string) {
    this.httpservice.updateUser(user,id).subscribe();
  }

  localstoragecheck() {
    console.log(localStorage.getItem("Authorization"));
  }

  checkedIn() {
    this.checkIn = new Date();
    console.log(this.checkIn);
  }
 
  checkedOut() {
    this.checkOut = new Date();
    console.log(this.checkOut)
  }

  addEntry() {
    const entry: Entry = { "id":"0", "checkIn":this.checkIn, "checkOut":this.checkOut };
    this.httpservice.createEntry(entry).subscribe();
    this.httpservice.getEntries().subscribe(entries => this.entries = entries);
  }

  deleteEntry(id: string) {
    console.log(id);
    this.httpservice.deleteEntry(id).subscribe();
    this.httpservice.getEntries().subscribe(entries => this.entries = entries);
  }

  constructor(private httpservice: HttpService) {
   }

  ngOnInit() {
  }

}
