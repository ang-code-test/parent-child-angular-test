import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  //TODO:  Subjects / Observables etc ?

  //Parents stashed gifts to give child
  #parentStash = ['Football', 'Lego', 'Xbox'];

  //Childs stashed gifts to give parent
  #childStash = ['Socks', 'Chocolates', 'Perfume'];

  giveGiftToChild = () => {
    //TODO: implement
    console.log('#parentStash', this.#parentStash);
  };

  giveGiftToParent = () => {
    //TODO: implement
    console.log('#childStash', this.#childStash);
  };

  constructor() {}
}
