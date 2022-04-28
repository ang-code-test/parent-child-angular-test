import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent {
  constructor() {}

  giftsToGive = ['Socks', 'Chocolates', 'Perfume'];
  giftsReceived = [];
  flagNoGiftsToGive = false;

  onClickBtnGiveGift = (event) => {
    //TODO: This is broken !!!
    this.giftsReceived.push(this.giftsToGive.pop());

    console.log('CHILD:  giftsToGive', this.giftsToGive);
    console.log('CHILD:  giftsReceived', this.giftsReceived);
  };
}
