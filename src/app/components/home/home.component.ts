import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picUrl:string = "https://angular.cn/assets/images/logos/angular/logo-nav@2x.png";

  public list:any = [
    {title:1},
    {title:2},
    {title:3},
  ]

  public flag:boolean = true;

  public orderStatus:number = 3;

  public attr:string = "blue";

  public today:any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
