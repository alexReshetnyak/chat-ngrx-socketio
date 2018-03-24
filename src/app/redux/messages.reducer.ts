import { Message } from '../message.model';
import { MESSAGE_ACTION, MessageAction } from './messages.action';

const initialState = {
  messages: []
};

export function messagesReducer( state = initialState, action: MessageAction) {
  switch (action.type) {
    case MESSAGE_ACTION.ADD_MESSAGE :
      return {
        ...state,
        messages: [...state.messages, action.message]
      };

    case MESSAGE_ACTION.DELETE_MESSAGE :
      return {
        ...state,
        messages: [...state.messages.filter(msg => msg.id !== action.message.id)]
      };

    case MESSAGE_ACTION.UPDATE_MESSAGE :
      return {
        ...state,
        messages: [...state.messages.map(msg => {
          msg.text = msg.id !== action.message.id ? action.message.text : msg.text;
          return msg;
        })]
      };

    default:
      return state;
  }
}
