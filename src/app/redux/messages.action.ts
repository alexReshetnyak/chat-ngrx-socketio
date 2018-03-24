
import { Message } from './../message.model';
import { Action } from '@ngrx/store';

export namespace MESSAGE_ACTION {
  export const ADD_MESSAGE = 'ADD_MESSAGE';
  export const DELETE_MESSAGE = 'DELETE_MESSAGE';
  export const UPDATE_MESSAGE = 'DELETE_MESSAGE';
}

export class AddMessage implements Action {
  readonly type = MESSAGE_ACTION.ADD_MESSAGE;

  constructor(public message: Message) {}
}

export class DeleteMessage implements Action {
  readonly type = MESSAGE_ACTION.DELETE_MESSAGE;

  constructor(public message: Message) {}
}

export class UpdateMessage implements Action {
  readonly type = MESSAGE_ACTION.UPDATE_MESSAGE;

  constructor(public message: Message) {}
}

export type MessageAction = AddMessage | DeleteMessage;
