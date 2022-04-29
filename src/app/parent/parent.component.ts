import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { GiftType } from '../models/gift.types';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ParentComponent implements OnInit {
  showBtn_stash = true;
  showBtn_joke = true;

  @Input()
  jokeGifts: Array<string>;

  @Input()
  showJokeBtn: Boolean;

  @Input()
  showStashBtn: Boolean;

  @Output()
  outputGiveChildGift: EventEmitter<GiftType> = new EventEmitter();

  ngOnInit() {}

  onClickBtn_Give = (giftType: GiftType) =>
    this.outputGiveChildGift.emit(giftType);
}
