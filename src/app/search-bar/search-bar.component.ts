import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() emitTask: EventEmitter<String> = new EventEmitter();

  addNewTask = (event: any) => {
    const task = event.target[0].form[0].value;
    if(!task.trim().length) return

    this.emitTask.emit(task);
    event.target[0].form[0].value = ""
  };
}
