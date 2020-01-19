import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-news12',
  templateUrl: './news12.component.html',
  styleUrls: ['./news12.component.css']
})
export class News12Component implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit() {
  }

  getData(){
    console.log("get data");
    let url:string = "http://www.baidu.com";
    this.http.get(url).subscribe((result)=>{
      console.log(result);
    })
  }

  postData(){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    let url:string = "http://www.baidu.com";
    this.http.post(url, {"username":"haha"}, httpOptions).subscribe((result)=>{
      console.log(result);
    })
  }

  getJsonpData(){
    console.log("get jsonp data");
    let url:string = "http://www.baidu.com";
    this.http.jsonp(url, "callback").subscribe((result)=>{
      console.log(result);
    })
  }

}
