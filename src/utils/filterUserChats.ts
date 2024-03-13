import { IChat } from "../lib/data/Types";
import { IInitialState } from "../store/slices/chats";
import getEndUserId from "./getEndUserId";

const filterUserChats = (chats: IInitialState, userID: number) => {
  return chats?.data?.reduce((filteredChats: any[], user: IChat) => {
    if (user.chatId.includes(`${userID}`)) {
      const EndUserID = getEndUserId(user.chatId, userID);
      if (EndUserID !== null && EndUserID !== undefined) {
        filteredChats.push({
          chatId: user.chatId,
          id: EndUserID,
          profile: {
            name: user.profile?.[EndUserID]?.name,
            picture: user.profile?.[EndUserID]?.picture,
            lastMessage: user?.profile?.[EndUserID]?.lastMessage,
            unreadedMessageCount:
              user?.profile?.[EndUserID]?.unreadedMessageCount,
          },
        });
      }
    }
    return filteredChats;
  }, []);
};

export default filterUserChats;
