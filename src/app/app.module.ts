import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SocketService } from './services/socket.service';
import { ChatService } from './services/chat.service';
import { AppComponent } from './app.component';
import { messagesReducer } from './redux/messages.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({messagePage: messagesReducer})
  ],
  providers: [ SocketService, ChatService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
