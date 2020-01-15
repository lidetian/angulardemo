import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyWord:string;

  public historyList:any[]=[];
  constructor(public storageService:StorageService) { 
  }

  ngOnInit() {
    var storageList:any = this.storageService.get('storageList');
    console.log(storageList);
    if(storageList){
      this.historyList = storageList;
    }
    console.log(this.historyList);
  }

  doSearch(){
    if(this.historyList.indexOf(this.keyWord)==-1){
      this.historyList.push(this.keyWord);
      this.storageService.set("storageList", this.historyList);
    }
    this.keyWord = "";
  }

  doDelete(key){
    this.historyList.splice(key, 1);
    this.storageService.set("storageList", this.historyList);
  }

}
