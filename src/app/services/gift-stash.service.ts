import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GiftStashService {
  stash$: Subject<string>;

  // Here's the secret stash hoarded by the Parent!
  #stash = ['XBox', 'Bmx', 'Telescope'];

  // We want to send ONE gift each time this is called
  giveStashGift = (): boolean => {
    //TODO:  hint??? .next()

    if (this.#stash.length === 0) {
      console.log('Stash is now empty!!!');
      return false;
    }

    console.log('GiftStashService:  #stash ', this.#stash);
    return true;
  };

  constructor() {}
}
