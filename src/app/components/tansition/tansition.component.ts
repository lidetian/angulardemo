import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tansition',
  templateUrl: './tansition.component.html',
  styleUrls: ['./tansition.component.css']
})
export class TansitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAside(){
    let asideDom = document.getElementById("aside");
    asideDom.style.transform = "translate(0,0)";
  }

  hideAside(){
    let asideDom = document.getElementById("aside");
    asideDom.style.transform = "translate(100%,0)";
  }
}
