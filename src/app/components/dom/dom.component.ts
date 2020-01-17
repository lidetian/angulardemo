import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.css']
})
export class DomComponent implements OnInit {

  @ViewChild('box', {static:true}) box:any;

  @ViewChild('appNews', {static:true}) appNews:any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.appNews);
    this.appNews.sayHi();
  }
}
