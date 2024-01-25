import { Component } from '@angular/core';
import * as uniqid from 'uniqid';

export interface todoListComponent {
  id: String;
  task: String;
}

export interface todoListComponents extends Array<todoListComponent> {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'todo app';

  todoData: todoListComponents = new Array();

  addToList = (data: String) => {
    const id = uniqid();
    this.todoData.push({
      id: id,
      task: data,
    });
  };

  removeFromList = (id: String) => {
    this.todoData = this.todoData.filter((data) => data.id !== id);
  };

  removeBulkFromList = (idList: Array<String>) => {
    this.todoData = this.todoData.filter((data) => !idList.includes(data.id));
  };
}
