import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
        <h1>{{ title }}</h1>
        <todo-list></todo-list>
    </div>`,
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Angular Flow Homework';
}
