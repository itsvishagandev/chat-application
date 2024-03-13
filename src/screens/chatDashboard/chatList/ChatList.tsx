import { useSelector } from "react-redux";
import { ChatHistory, SearchResult, SearchUser, UserInfo } from "./components";
import { AppState } from "../../../store";

const ChatList = () => {
  const { searchQuery } = useSelector((state: AppState) => state.UserSearch);

  return (
    <aside className="basis-1/4 flex flex-col gap-6 justify-stretch h-screen pt-5 pb-3">
      <UserInfo />
      <SearchUser />
      {searchQuery ? <SearchResult /> : <ChatHistory />}
    </aside>
  );
};

export default ChatList;
