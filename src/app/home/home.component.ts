import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("startTime", { static: true }) 
  startTime: ElementRef;

  @ViewChild("endTime", { static: true }) 
  endTime: ElementRef;

  displayLogin: boolean = true;
  displayHome: boolean = false;
  displayRegister: boolean = false;

  print() {
    console.log(this.startTime.nativeElement.value+this.endTime.nativeElement.value)
  }

  constructor() { }

  ngOnInit() {
  }

}
