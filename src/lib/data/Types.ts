export interface IUser {
  id: number;
  profile: {
    name: string;
    picture: string;
    isOnline?: boolean;
  };
}

export interface IChat {
  chatId: string;
  profile: {
    [key: string]: {
      name: string;
      picture: string;
      lastMessage: {
        text: string;
        time?: string;
      };
      unreadedMessageCount: number;
    };
  };
  messages: {
    text: string;
    sentBy: number;
    date: string;
  }[];
}
