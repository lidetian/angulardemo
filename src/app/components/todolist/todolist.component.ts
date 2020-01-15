import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyWord: string;

  public todoList: any[] = [];


  constructor(public storageService:StorageService) { }

  ngOnInit() {
    var storageTodoList:any = this.storageService.get('storageTodoList');
    console.log(storageTodoList);
    if(storageTodoList){
      this.todoList = storageTodoList;
    }
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      this.todoList.push({
        title: this.keyWord,
        status: 0
      });
      this.keyWord = "";
      console.log(this.todoList);
      this.storageService.set("storageTodoList", this.todoList);
    }
  }

  doDelete(key) {
    this.todoList.splice(key, 1);
    this.storageService.set("storageTodoList", this.todoList);
  }

  changeCheckbox(){
    this.storageService.set("storageTodoList", this.todoList);
  }
}
