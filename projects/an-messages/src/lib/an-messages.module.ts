import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnMessagesComponent } from './an-messages.component';
import { AnMessagesService } from './an-messages.service';

@NgModule({
  declarations: [AnMessagesComponent],
  imports: [CommonModule],
  exports: [AnMessagesComponent],
})
export class AnMessagesModule {
  static forRoot() {
    return {
      ngModule: AnMessagesModule,
      // services that you want to share across modules
      providers: [AnMessagesService],
    };
  }
}
