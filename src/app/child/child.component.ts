import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent {
  @Input()
  gifts: Array<string> = [];

  @Output()
  outputRefusedLastGift = new EventEmitter<boolean>();

  onClickBtn_RefusedLastGift = () => {
    console.log(`Child click "I don't want that!"`);
    this.outputRefusedLastGift.emit(true);
  };

  constructor() {}
}
