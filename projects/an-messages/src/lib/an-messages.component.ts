import { Component, OnInit } from '@angular/core';
import { AnMessagesService } from './an-messages.service';

@Component({
  selector: 'an-messages',
  templateUrl: 'an-messages.component.html',
  styleUrls: ['an-messages.component.less'],
})
export class AnMessagesComponent implements OnInit {
  constructor(public messageService: AnMessagesService) {}
  ngOnInit() {}

  // this.essagesService.message_add('succ', 'Message that we want to show', 3000);
  // this.essagesService.message_add('err', 'Message that we want to show', 3000);
  // this.essagesService.message_add('info', 'Message that we want to show');

  public message_delete(id: number): void {
    this.messageService.message_deleteS(id);
  }
}
