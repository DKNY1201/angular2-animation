import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)), // transition from normal state to highlighted state
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [  // using wildcard to indicate all states & use multiple phases
        style({ // immediately change
          backgroundColor: 'orange'
        }),
        animate(1000, style({ // change with animate
          borderRadius: '50px'
        })),
        animate(500) // animation for end phase
      ])
    ])
  ]
})

export class AppComponent {
  state = 'normal';
  wildState = 'normal';
	list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState == 'normal' ? this.wildState = 'shrunken' : this.wildState = 'normal';
  }

	onAdd(item) {
		this.list.push(item);
	}

	onDelete(item) {
		this.list.splice(this.list.indexOf(item), 1);
	}
}
