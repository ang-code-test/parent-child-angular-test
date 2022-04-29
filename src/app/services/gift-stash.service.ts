import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftStashService {
  stash$: Subject<string>; //TODO:  decide which to use etc

  // Here's the secret stash hoarded by the Parent!
  #stash = ['XBox', 'Bmx', 'Telescope'];

  // We want to send ONE gift each time this is called
  giveStashGift = (): boolean => {
    //TODO:  hint??? .next()

    if (this.#stash.length === 0) {
      console.log('Stash is now empty!!!');
      return false;
    }

    const gift = this.#stash.shift();
    this.stash$.next(gift);

    console.log('.next(gift)', gift);
    console.log('GiftStashService:  #stash ', this.#stash);
    return true;
  };

  constructor() {
    this.stash$ = new Subject<string>();
  }
}
