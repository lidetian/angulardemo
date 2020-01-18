import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news9',
  templateUrl: './news9.component.html',
  styleUrls: ['./news9.component.css']
})
export class News9Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  run(e){
    console.log("this is run from news9");
    console.log(e);
  }

}
