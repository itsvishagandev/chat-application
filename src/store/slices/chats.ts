import { createSlice } from "@reduxjs/toolkit";
import { IChat } from "../../lib/data/Types";
import { getTime } from "../../utils";
import {
  getChatInitialData,
  getChatInitialIds,
} from "../../utils/getChatFromLocalStorage";

export interface IInitialState {
  activeChatID: string;
  ids: string[];
  data: IChat[];
}

export const initialState: IInitialState = {
  activeChatID: "",
  ids: getChatInitialIds(),
  data: getChatInitialData(),
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    createChat: (state, { payload }) => {
      state.data.push(payload.data);
      state.activeChatID = payload.activeChatID;
      state.ids.push(payload.ids);
    },
    openChat: (state, { payload }) => {
      state.activeChatID = payload;
    },
    sendMessage: (state, { payload }) => {
      const { messageData, endUserID, userID, chatID } = payload;
      const chatIndex = state.data.findIndex((chat) => chat.chatId === chatID);
      if (chatIndex !== -1) {
        if (!state.data[chatIndex].messages) {
          state.data[chatIndex].messages = [];
        }
        state.data[chatIndex].messages.push(messageData);
        if (state.data[chatIndex].profile?.[`${endUserID}`]) {
          state.data[chatIndex].profile[`${endUserID}`].lastMessage.text =
            messageData.text;
          state.data[chatIndex].profile[`${userID}`].lastMessage.text =
            messageData.text;
          state.data[chatIndex].profile[`${endUserID}`].lastMessage.time =
            getTime(messageData.date);
          state.data[chatIndex].profile[`${userID}`].lastMessage.time = getTime(
            messageData.date
          );
          state.data[chatIndex].profile[`${userID}`].unreadedMessageCount += 1;
        }
      }
    },
    syncChat: (state, { payload }) => {
      const { activeChatID, ids, data } = payload;
      if (ids) {
        state.ids = ids;
      }
      if (activeChatID) {
        state.activeChatID = activeChatID;
      }
      if (data) {
        state.data = data;
      }
    },
    setMessagesReaded: (state, { payload }) => {
      const { userID, chatID } = payload;
      const chatIndex = state.data.findIndex((chat) => chat.chatId === chatID);
      if (chatIndex !== -1 && state.data[chatIndex].profile?.[userID]) {
        state.data[chatIndex].profile[userID].unreadedMessageCount = 0;
      }
    },
  },
});

export const {
  createChat,
  openChat,
  sendMessage,
  syncChat,
  setMessagesReaded,
} = chatSlice.actions;
export default chatSlice;
