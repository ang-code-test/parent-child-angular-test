/*************************************
 *
 * YOU DONT NEED TO CHANGE THIS FILE
 *
 *************************************/

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  overview = `It's your lucky childs birthday...  You have a stash of quality gifts to give, however because it's funny
  you decide to give the odd joke gift as well.  Of course the child is allowed to reject a present!`;

  objectives = [
    `1.  Clicking button "Give joke gift" will give ONE gift from "parent-child-container" variable "jokeGifts" using straight forward binding`,
    `2.  Wire up button "Give gift from Stash" - use gift-stash.service method giveStashGift() and rxjs observables/subject/subscription style"`,
    `3:  Wire Child's "I don't want that" button up and remove the LAST gift given.`,
    `4:  Hide each button as the corresponding gift availability has ended.`,
  ];

  constructor() {}
}
