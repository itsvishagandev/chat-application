import { useDispatch, useSelector } from "react-redux";
import { Header, MessageBar, Preview } from "./components";
import { AppDispatch, AppState } from "../../../store";
import { getEndUserId } from "../../../utils";
import { setMessagesReaded, syncChat } from "../../../store/slices/chats";
import { useEffect } from "react";
import DesktopIcon from "../../../assets/svg/DesktopIcon";
import {
  getChatInitialData,
  getChatInitialIds,
} from "../../../utils/getChatFromLocalStorage";

export interface IProfile {
  name: string;
  picture: string;
  lastMessage: {
    text: string;
    time?: string;
  };
  unreadedMessageCount: number;
}

const PersonalChat = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: AppState) => state.user);
  const chats = useSelector((state: AppState) => state.chats);
  const activeChatID = chats?.activeChatID;

  const chatData = chats.data?.find((chat) => chat.chatId === activeChatID);
  const endUserId = getEndUserId(activeChatID, user.id) || "";
  const profile = chatData?.profile?.[endUserId] || null;
  const messages = chatData?.messages || [];

  useEffect(() => {
    if (activeChatID) {
      const payload = {
        userID: endUserId,
        chatID: activeChatID,
      };
      dispatch(setMessagesReaded(payload));
    }
  }, [activeChatID, dispatch, endUserId]);

  useEffect(() => {
    localStorage.setItem("chatData", JSON.stringify(chats.data));
    localStorage.setItem("chatIds", JSON.stringify(chats.ids));
  }, [chats]);

  // eslint-disable-next-line
  const onStorageUpdate = (e: any) => {
    const { key } = e;
    if (key === "chatData") {
      dispatch(syncChat({ data: getChatInitialData() }));
    } else if (key === "chatIds") {
      dispatch(syncChat({ ids: getChatInitialIds() }));
    } else {
      return false;
    }
  };

  // useEffect(() => {
  //   window.addEventListener("storage", onStorageUpdate);
  //   return () => {
  //     window.removeEventListener("storage", onStorageUpdate);
  //   };
  // }, []);

  return (
    <main className="flex-1 flex flex-col bg-secondary h-screen border-r border-l border-lightBlue-200 overflow-hidden">
      {!!activeChatID ? (
        <>
          <Header profile={profile} />
          <Preview profile={profile} messages={messages} />
          <MessageBar
            userID={user.id}
            chatID={activeChatID}
            endUserID={endUserId}
          />
        </>
      ) : (
        <div className="flex flex-col gap-10 items-center justify-center h-full">
          <DesktopIcon />
          <h2 className="text-xl text-textMuted-700">
            Search Peoples, and start your conversation
          </h2>
        </div>
      )}
    </main>
  );
};

export default PersonalChat;
