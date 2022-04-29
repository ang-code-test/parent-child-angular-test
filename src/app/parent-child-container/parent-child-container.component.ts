import { Component, OnInit } from '@angular/core';

import { GiftStashService } from '../services/gift-stash.service';
import { GiftType } from '../models/gift.types';

@Component({
  selector: 'app-parent-child-container',
  template: `
            <app-parent></app-parent>
            
            <app-child 
              [gifts]="childsReceivedGifts">
            </app-child>`,
})
export class ParentChildContainerComponent implements OnInit {
  //Arrays
  childsReceivedGifts = [];
  jokeGifts = ['Ugly Carrot', 'Empty Box', 'Sweaty sock'];

  //display flags
  showJokeBtn = true;
  showStashBtn = true;

  constructor(private giftStashService: GiftStashService) {}

  ngOnInit() {}

  onGiveChildGift = (giftType: GiftType) => {
    switch (giftType) {
      case 'joke': {
        console.log("I'm gonna give you a joke gift, I'm so funny :) ");

        //this.showJokeBtn = this.jokeGifts.length !== 0;
        break;
      }

      case 'stash': {
        console.log('Gifting from my secret stash! ( ...needs service method)');

        break;
      }
    }
  };

  onRefusedLastGift = (event): void => {
    /**
     * TODO:
     *
     * Remove last gift from array
     */

    const giftToRemove =
      'placeholder - NEED TO GET CORRECT GIFT AND UPDATE ARRAYS';
    console.log('Unwanted gift to remove', giftToRemove);
  };
}
