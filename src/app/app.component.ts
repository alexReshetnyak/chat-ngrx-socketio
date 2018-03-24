import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ChatService } from './services/chat.service';
import { Message, Messages } from './message.model';
import { AppState } from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'app';
  public newMessage: string;
  public userId: number;
  public messagesState: Observable<Messages>;

  constructor(
    private chat: ChatService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    // this.store.select('messagePage').subscribe( ({messages}) => {
    //   this.messages = messages;
    // });
    this.userId = Math.random();
    this.messagesState = this.store.select('messagePage');
  }

  sendMessage() {
    if (this.newMessage) {
      this.chat.sendMsg({
          id: this.messageId,
          userId: this.userId,
          text: this.newMessage
      });
      this.newMessage = '';
    }
  }

  deleteMessage(message: Message) {
    this.chat.deleteMessage(message);
  }

  get messageId(): string {
    return this.newMessage + Math.random();
  }

}
