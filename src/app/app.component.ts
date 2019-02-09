import { Component } from '@angular/core';
import { AnMessagesService } from 'an-messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private messagesService: AnMessagesService) {
    this.messagesService.message_add('err', 'HelloWorld', 1500);
  }
}
