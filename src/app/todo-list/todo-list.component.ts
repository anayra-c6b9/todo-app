import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todoListComponent, todoListComponents } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoData: todoListComponents = new Array();
  checkList: Array<String> = new Array();

  trackByTodoId = (index: Number, todoItem: todoListComponent): String => {
    return todoItem.id;
  };

  @Output() emitDeleteTask: EventEmitter<String> = new EventEmitter();
  @Output() emitDeleteBulk: EventEmitter<Array<String>> = new EventEmitter();

  deleteSingle = (taskId: String) => {
    this.emitDeleteTask.emit(taskId)
  }

  checkTaskHandler = (taskId: String) => {
    this.checkList.push(taskId)
  }

  uncheckTaskHandler = (taskId: String) => {
    this.checkList = this.checkList.filter(check => check!==taskId)
  }

  deleteButtonHandler = () => {
    this.emitDeleteBulk.emit(this.checkList)
  }
}
