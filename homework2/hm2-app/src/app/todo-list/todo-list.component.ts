import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-list">
      <h2>todo-list works!</h2>
      <div>ToDo Item Status: {{ dataItem.status }}</div>
      <todo-list-item 
              [item]="dataItem" 
              (completed)="onCompleted($event)"></todo-list-item>
    </div>
    `,
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() {}

  dataItem = {
    title: 'Finish',
    status: false
  }

  onCompleted(completed) {
    this.dataItem.status = completed;
  }

  ngOnInit() {
  }

}
