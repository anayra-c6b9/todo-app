import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() taskId: String = String();

  @Input() taskData: String = String();

  @Output() emitDelete: EventEmitter<String> = new EventEmitter();

  @Output() emitCheck: EventEmitter<String> = new EventEmitter();

  @Output() emitUncheck: EventEmitter<String> = new EventEmitter();

  deleteTask = () => {
    this.emitDelete.emit(this.taskId)
  }

  checkTaskHandler = (event: any) => {
    if(event.target.checked)
      this.emitCheck.emit(this.taskId)
    else
      this.emitUncheck.emit(this.taskId)
  }
}
