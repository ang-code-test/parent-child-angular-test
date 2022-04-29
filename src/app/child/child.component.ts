import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent {
  constructor() {}

  giftsToGive = ['Mug', 'Flowers'];
  giftsReceived = [];
  flagNoGiftsToGive = false;

  onClickBtnGiveGiftToParent = (event) => {
    // TODO: 
    // 1.  Give ONE gift from "giftsToGive" with each click of the button.
    // 2.  Then get another present from "parentsStash" in gift.service and add it to "giftsToGive".
    // 3:  When all gifts have been depleted then set "flagNoGiftsToGive" to show message and "hide button."

    console.log('CHILD:  giftsToGive', this.giftsToGive);
    console.log('CHILD:  giftsReceived', this.giftsReceived);
  };
}
