import { Message } from '../message.model';

export interface AppState {
  messagePage: {
    messages: Message[];
  };
}
