import { Component } from '@angular/core';
import {state, style, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        translate: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        translate: 'translateX(100px)'
      }))
    ])
  ]
})
export class AppComponent {
  state = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}
