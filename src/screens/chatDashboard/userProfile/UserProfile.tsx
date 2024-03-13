import { useSelector } from "react-redux";
import { Files, Profile } from "./components";
import { AppState } from "../../../store";
import { getEndUserId } from "../../../utils";

const UserProfile = () => {
  const user = useSelector((state: AppState) => state.user);
  const chats = useSelector((state: AppState) => state.chats);
  const activeChatID = chats?.activeChatID;

  const chatData = chats.data?.find((chat) => chat.chatId === activeChatID);
  const endUserId = getEndUserId(activeChatID, user.id) || "";
  const userProfile = chatData?.profile?.[endUserId] || null;

  return !!activeChatID ? (
    <aside className="basis-1/4 flex flex-col h-screen bg-white overflow-hidden">
      <Profile data={userProfile} endUserId={endUserId} />
      <Files />
    </aside>
  ) : (
    <></>
  );
};

export default UserProfile;
