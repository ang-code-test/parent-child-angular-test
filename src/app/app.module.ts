/*************************************
 *
 * YOU DONT NEED TO CHANGE THIS FILE
 *
 *************************************/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GiftComponent } from './gift/gift.component';
import { GiftStashService } from './services/gift-stash.service';
import { ParentChildContainerComponent } from './parent-child-container/parent-child-container.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    ParentChildContainerComponent,
    ParentComponent,
    ChildComponent,
    GiftComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GiftStashService],
})
export class AppModule {}
