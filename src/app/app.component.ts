import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  objectives = [
    `WHEN clicking "Give child a gift" THEN the first gift should appear in
        the childs box retaining it's color blue.`,
    `WHEN clicking "Give parent a gift" THEN the first gift should appear in
        the parents box retaining it's color tomato.`,
    `WHEN parent has no  more gifts to give THEN hide the button and display message
        "Thank you for all the presents".`,
    `WHEN child has no  more gifts to give THEN hide the button and display message
        "Thank you for all the presents".`,
    `REWIRE to use a service observable to get gifts from the parent/child stash.  gift.service.ts has been started for you`,
  ];

  constructor() {}
}
