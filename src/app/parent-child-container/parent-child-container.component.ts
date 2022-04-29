import { Component, OnInit } from '@angular/core';

import { GiftStashService } from '../services/gift-stash.service';
import { GiftType } from '../models/gift.types';

@Component({
  selector: 'app-parent-child-container',
  template: `
            <app-parent 
                (outputGiveChildGift)="onGiveChildGift($event)"
                [showJokeBtn]="showJokeBtn"
                [showStashBtn]="showStashBtn">
            </app-parent>
            
            <app-child 
                  [gifts]="childsReceivedGifts" 
                  (outputRefusedLastGift)="onRefusedLastGift($event)">
            </app-child>`,
})
export class ParentChildContainerComponent implements OnInit {
  //Arrays
  childsReceivedGifts = [];
  jokeGifts = ['Carrot', 'Empty Box'];

  //display flags
  showJokeBtn = true;
  showStashBtn = true;

  constructor(private giftStashService: GiftStashService) {}

  ngOnInit() {
    /**
     * TODO:
     *
     * Listen for incoming gifts from stash service
     * ...and add them to childsReceivedGifts[]
     */

    this.giftStashService.stash$.subscribe((gift) => {
      this.childsReceivedGifts.push(gift);
    });
  }

  onGiveChildGift = (giftType: GiftType) => {
    switch (giftType) {
      case 'joke': {
        console.log("I'm gonna give you a joke gift, I'm so funny :) ");
        this.childsReceivedGifts = this.childsReceivedGifts.concat(
          this.jokeGifts.shift()
        );
        this.showJokeBtn = this.jokeGifts.length !== 0;
        break;
      }
      case 'stash': {
        console.log(
          "I'm gonna give you a gift from my secret stash! ( ...oh I need to use the service for this)"
        );

        if(!this.giftStashService.giveStashGift()) {
          this.showStashBtn = false;
        }
        
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
    const giftToRemove = this.childsReceivedGifts.pop();
    console.log('Unwanted gift to remove', giftToRemove);
  };
}
