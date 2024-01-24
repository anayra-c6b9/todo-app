import { Component, Input } from '@angular/core';
import { todoListComponent, todoListComponents } from '../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoData: todoListComponents = new Array();

  trackByTodoId = (index: Number, todoItem: todoListComponent): String => {
    return todoItem.id;
  };
}
