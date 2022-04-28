import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class GiftComponent {
  @Input()
  gift: string;

  constructor() {}
}
