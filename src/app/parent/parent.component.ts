import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent implements OnInit {
  constructor(private giftService: GiftService) {}

  giftsToGive = ['Trainset', 'Piano', 'Telescope'];
  giftsReceived = [];
  noGiftsToGive = false;

  ngOnInit() {}

  onClickBtnGiveGiftToChild = (event) => {
    // TODO:
    // 1.  Give ONE gift from "giftsToGive" with each click of the button.
    // 2.  Then get another present from "parentsStash" in gift.service and add it to "giftsToGive".
    // 3:  When all gifts have been depleted then set "flagNoGiftsToGive" to show message and "hide button."

    console.log('PARENT:  giftsToGive', this.giftsToGive);
    console.log('PARENT:  giftsReceived', this.giftsReceived);
  };

  //Tidy up subscriptions?
}
