
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../redux/app.state';
import { SocketService } from './socket.service';
import { Message } from './../message.model';
import { AddMessage, DeleteMessage } from '../redux/messages.action';


@Injectable()
export class ChatService {

  socketMessages: Subject<any>;

  constructor(
    private socketService: SocketService,
    private store: Store<AppState>
  ) {
    this.socketMessages = <Subject<any>>socketService.connect().pipe(
      map((response: any): any => {
        return response;
      })
    );
    this.getMessageList();
  }

  private getMessageList() {
    this.socketMessages.subscribe((message: Message) => {
      this.store.dispatch(new AddMessage(message));
    });
  }

  public sendMsg(msg: Message) {
    this.socketMessages.next(msg);
  }

  public deleteMessage(msg: Message) {
    this.store.dispatch(new DeleteMessage(msg));
  }

}
