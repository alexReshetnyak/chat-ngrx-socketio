
export class Message {
  constructor(
    public text: string,
    public id: string,
    public userId: number
  ) {}
}

export interface Messages {
  messages: Array<Message>;
}
