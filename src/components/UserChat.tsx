import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar";
import { AppDispatch, AppState } from "../store";
import { createChat, openChat } from "../store/slices/chats";
import { searchUser } from "../store/slices/userSearch";

interface IUserChat {
  data: {
    id: number;
    profile: {
      name: string;
      picture: string;
      lastMessage?: {
        text: string;
        time: string;
      };
      unreadedMessageCount?: number;
    };
  };
}

const UserChat = ({ data }: IUserChat) => {
  const user = useSelector((state: AppState) => state.user);
  const chats = useSelector((state: AppState) => state.chats);
  const dispatch: AppDispatch = useDispatch();

  let payload = {};

  const prevChatId = (updatePlayload = false) => {
    if (chats?.ids.includes(`${user?.id}-${data?.id}`)) {
      return `${user?.id}-${data?.id}`;
    } else if (chats?.ids.includes(`${data?.id}-${user?.id}`)) {
      return `${data?.id}-${user?.id}`;
    } else {
      if (updatePlayload) {
        payload = {
          activeChatID: `${user?.id}-${data?.id}`,
          ids: `${user?.id}-${data?.id}`,
          data: {
            chatId: `${user?.id}-${data?.id}`,
            profile: {
              [user?.id]: {
                name: user?.profile?.name,
                picture: user?.profile?.picture,
                lastMessage: {
                  text: "",
                  time: "",
                },
                unreadedMessageCount: 0,
              },
              [data?.id]: {
                name: data?.profile?.name,
                picture: user?.profile?.picture,
                lastMessage: {
                  text: "",
                  time: "",
                },
                unreadedMessageCount: 0,
              },
            },
          },
        };
      }

      return false;
    }
  };

  const previewChat = () => {
    const chatId = prevChatId(true);
    if (!chatId) {
      console.log("payload==>", payload);
      dispatch(createChat(payload));
    } else {
      dispatch(openChat(chatId));
    }
    dispatch(searchUser(""));
  };

  if (prevChatId() && !data?.profile?.lastMessage?.text) {
    return <></>;
  }

  return (
    <li
      onClick={previewChat}
      className="flex items-center gap-4 cursor-pointer hover:bg-secondary px-1 py-2 rounded-md"
    >
      <Avatar imgURl={data?.profile?.picture} />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <p className="">{data?.profile?.name}</p>
          <span className="text-xs text-textMuted-600">
            {data?.profile?.lastMessage?.time}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-textMuted-600">
            {data?.profile?.lastMessage?.text}
          </p>
          {!!data?.profile?.unreadedMessageCount &&
            data?.profile?.unreadedMessageCount > 0 && (
              <span className="flex justify-center items-center text-xs text-white bg-primary rounded-full px-0.5 aspect-square">
                {data?.profile?.unreadedMessageCount}
              </span>
            )}
        </div>
      </div>
    </li>
  );
};

export default UserChat;
