import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyWord:string;

  public historyList:any[]=[];
  constructor() { }

  ngOnInit() {
  }

  doSearch(){
    if(this.historyList.indexOf(this.keyWord)==-1){
      this.historyList.push(this.keyWord);
    }
    this.keyWord = "";
  }

  doDelete(key){
    this.historyList.splice(key, 1);
  }

}
