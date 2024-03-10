import { ChatList } from "./chatList";
import { PersonalChat } from "./personalChat";
import { UserProfile } from "./userProfile";

const ChatDashBoard = () => {
  return (
    <section className="flex flex-row">
      <ChatList />
      <PersonalChat />
      <UserProfile />
    </section>
  );
};

export default ChatDashBoard;
