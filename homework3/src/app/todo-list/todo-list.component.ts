import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
      <ng-container #cont></ng-container>
  `,
  styles: []
})

export class TodoListComponent implements OnInit {

  @ViewChild('cont', {read: ViewContainerRef}) cont:ViewContainerRef;

  constructor() { }

  ngOnInit() {

  }

  addView(view) {
    this.cont.insert(view);
  }

  removeView(viewIndex) {
    return this.cont.detach(viewIndex);
  }

}
