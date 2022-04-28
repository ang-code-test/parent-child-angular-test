import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  gift = new Subject();
  deliveries$: Observable<string>;

  //Parents stashed gifts to give child
  #parentStash = ['guitar', 'baseball cap', 'posters'];

  //Childs stashed gifts to give parent
  #childStash = ['sweater', 'socks', 'scarf'];

  getParentStash = () => {
    this.gift.next(this.#parentStash.shift());
  };

  getChildStash = () => {
    this.gift.next(this.#childStash.shift());
  };

  mockOnlineShopDelivery = () => {};

  constructor() {
    this.deliveries$ = new Observable(this.gift.subscribe);
  }
}
