import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  template: `
    <div class="todo-list-item">
      <h5>Title: {{ item.title }}</h5>
      <h5>Status: {{ item.status }}</h5>
      <div>
        <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" 
                (change)="onStatusChange($event)">
        <label for="subscribeNews">Checked</label>
      </div>
    </div>`,
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() item;
  @Output() completed = new EventEmitter();

  onStatusChange(event) {
    // this.item.status = !this.item.status;
    this.completed.emit(event.target.checked);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
      // why does this line cause ExpressionChangedAfterItHasBeenCheckedError
      // this.item.status = !this.item.status;

      // why this error disappears if you remove
      // <h4>Status: {{item.completed}}</h4>
      // from this component's template
  }

  ngOnInit() {
  }

}
