import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title:string = "这是什么";

  public userinfo:object = {
    name : "哼哼",
    age : 100
  }

  public message:any;

  public content:string = "<h2>I am h2! </h2>";

  public array:string[] = ["111","222","333"]

  public userlist:any[] = [{
    name : "haha",
    age : 1000
  }, {
    name : "houhou",
    age : 999
  }]
  constructor() { 
    this.message = "呵呵";

    console.log(this.title);

    this.title = "what is that?"

  }

  ngOnInit() {
  }

}
