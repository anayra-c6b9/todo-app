import { Component, Input } from '@angular/core';
import { todoListComponent, todoListComponents } from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css'],
})
export class AppContentComponent {
  @Input() todoData: todoListComponents = new Array();

  showNewTodoData = (data: String) => {
    console.log(data);
  };
}
