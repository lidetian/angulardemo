import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header9',
  templateUrl: './header9.component.html',
  styleUrls: ['./header9.component.css']
})
export class Header9Component implements OnInit {

  @Input() title:any;
  @Input() msg:any;
  @Input() run: any;
  constructor() { }

  ngOnInit() {
  }

  getParentRun(){
    this.run();
  }

}
