import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscribable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SocketService {

  // Our socket connection
  private socket;

  constructor() { }

  connect(): Subject<MessageEvent> {

    this.socket = io(environment.url);

    const observable = new Observable((observerO) => {
        this.socket.on('message', (data) => {
          // console.log(data, 'Received message from Websocket Server');
          observerO.next(data);
        });
        return () => {
          this.socket.disconnect();
        };
    });

    const observer = {
        next: (data: Object) => {
            this.socket.emit('message', data);
        },
    };

    return Subject.create(observer, observable);
  }

}
