import {
    Component,
    EmbeddedViewRef,
    TemplateRef,
    ViewChild,
    AfterViewInit,
    ViewChildren, QueryList
} from '@angular/core';

import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  template: `
      <div class="top">
          <span>Top </span>
          <todo-list></todo-list>
      </div>
      
      <div class="bottom">
          <span>Botton</span>
          <todo-list></todo-list>
      </div>
      
      <ng-template #tmpl>
          <span> => Moved Span <= </span>
      </ng-template>
      
      <button (click)="onMove($event)">Add</button>
  `,
  styles: ['.top, .bottom {border: 1px solid black; padding: 10px; margin: 10px 0; height: 30px; width: 500px; }']
})
export class AppComponent implements AfterViewInit {

  @ViewChildren(TodoListComponent)
  queryTodo:QueryList<TodoListComponent>;

  @ViewChild('tmpl')
  tmpl:TemplateRef<null>;

  embedView:EmbeddedViewRef<null>;

  curView = false;

  ngAfterViewInit() {
    this.embedView = this.tmpl.createEmbeddedView(null);
    this.queryTodo.first.addView(this.embedView);
    this.curView = true;
  }

  onMove(e) {
    if(this.curView) {
      this.curView = false;

      this.queryTodo.last.removeView(0);
      this.queryTodo.last.addView(this.embedView);
    } else {
      this.curView = true;

      this.queryTodo.first.removeView(0);
      this.queryTodo.first.addView(this.embedView);
    }
  }
}
