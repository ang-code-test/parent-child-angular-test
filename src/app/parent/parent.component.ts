import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent implements OnInit, OnDestroy {
  constructor(private giftService: GiftService) {}

  giftsToGive = ['Football', 'Lego', 'Xbox'];
  giftsReceived = [];
  noGiftsToGive = false;

  #subscriptions = [];

  ngOnInit() {
    this.#subscriptions.push(
      this.giftService.deliveries$.subscribe((delivery) => {
        this.giftsToGive.push(delivery);
      })
    );
  }

  onClickBtnGiveGift = (event) => {
    //TODO: This is broken !!!
    this.giftsReceived.push(this.giftsToGive.pop());

    console.log('CHILD:  giftsToGive', this.giftsToGive);
    console.log('CHILD:  giftsReceived', this.giftsReceived);
  };

  ngOnDestroy = () => this.#subscriptions.forEach((s) => s.unsubscribe());
}
