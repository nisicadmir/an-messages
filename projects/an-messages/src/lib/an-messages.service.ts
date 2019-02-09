import { Injectable } from '@angular/core';

export class MessageModel {
  id: number;
  type: string;
  text: string;
  constructor(id: number, type: string, text: string) {
    this.id = id;
    this.type = type;
    this.text = text;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnMessagesService {
  public messages: MessageModel[] = [];
  private readonly message_timeout: number = 5000;

  constructor() {}

  public message_add(type: string, text: string, duration?: number) {
    // type can be err or succ
    // message string
    const messageNew = new MessageModel(Math.random(), type, text);
    let skipMessage: boolean = false;
    for (const key in this.messages) {
      if (this.messages.hasOwnProperty(key)) {
        if (this.messages[key].text === messageNew.text && this.messages[key].type === messageNew.type) {
          skipMessage = true;
          break;
        }
      }
    }
    if (!skipMessage) {
      this.messages.push(messageNew);
      // delete after 3 seconds
      setTimeout(() => {
        this.message_deleteS(messageNew.id);
      }, duration || this.message_timeout);
    }
  }

  public message_deleteS(id: number) {
    for (const key in this.messages) {
      if (this.messages.hasOwnProperty(key) && this.messages[key].id === id) {
        this.messages.splice(+key, 1);
      }
    }
  }
}
