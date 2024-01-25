import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todoListComponent, todoListComponents } from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
})
export class AppContentComponent {
  @Input() todoData: todoListComponents = new Array();

  @Output() emitTaskData: EventEmitter<String> = new EventEmitter();
  @Output() emitDeleteTask: EventEmitter<String> = new EventEmitter();
  @Output() emitDeleteBulk: EventEmitter<Array<String>> = new EventEmitter();
  showNewTodoData = (data: String) => {
    this.emitTaskData.emit(data)
  };

  deleteSingleTask = (data: String) => {
    this.emitDeleteTask.emit(data)
  }

  deleteBulkTask = (data: Array<String>) => {
    this.emitDeleteBulk.emit(data)
  }
}
