import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer9',
  templateUrl: './footer9.component.html',
  styleUrls: ['./footer9.component.css']
})
export class Footer9Component implements OnInit {

  @Output() outer = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  sendParent(){
    this.outer.emit("this is from footer9");
  }

}
