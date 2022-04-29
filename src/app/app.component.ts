import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  objectives = [
    `1.  Clicking button should give a gift to designated receiver`,
    `2.  Both parent and child have an additional stash of gifts, so....
        After ONE gift is given, also check the gift.service for any available in the corresponding secret stash and add ONE`,
    `3:  When absolutely all gifts have been depleted, set "flagNoGiftsToGive" to show message and "hide button.`,
  ];

  tips = [
    `Start with the parent and leave the child until last`,
    `There are comments in the code to help you`,
    `No styling changes required`,
  ];

  constructor() {}
}
