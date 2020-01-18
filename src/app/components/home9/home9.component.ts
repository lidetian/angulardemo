import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home9',
  templateUrl: './home9.component.html',
  styleUrls: ['./home9.component.css']
})
export class Home9Component implements OnInit {

  public title:string = 'I am title from home9';
  public msg:string = 'I am msg from home9';

  constructor() { }

  ngOnInit() {
  }

  run(){
    alert("this is run method from parent");
  }

}
