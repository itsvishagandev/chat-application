import { ChatHistory, SearchUser, UserInfo } from "./components";

const ChatList = () => {
  return (
    <aside className="basis-1/4 flex flex-col gap-6 justify-stretch h-screen pt-5 pb-3 border-r border-lightBlue-200">
      <UserInfo />
      <SearchUser />
      <ChatHistory />
    </aside>
  );
};

export default ChatList;
