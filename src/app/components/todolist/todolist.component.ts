import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyWord: string;

  public todoList: any[] = [];


  constructor() { }

  ngOnInit() {
  }

  doAdd(e) {
    if (e.keyCode == 13) {
      this.todoList.push({
        title: this.keyWord,
        status: 0
      });
      this.keyWord = "";
      console.log(this.todoList);
    }
  }

  doDelete(key) {
    this.todoList.splice(key, 1);
  }

}
