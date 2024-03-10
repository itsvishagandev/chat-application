import { ChatList } from "../../../../@components";

const ChatHistory = () => {
  return (
    <div className="flex-grow flex flex-col gap-5 h-full overflow-hidden">
      {/* Filter chats  */}
      <div className="sidebar-item-spacing">
        <div className="flex text-sm p-[2px] rounded-lg bg-gray-100 mb-1">
          <span className="flex-1 text-center border border-gray-200 bg-white rounded-lg shadow-[0px 3px 1px 0px #D1D7EA0A] p-1">
            All
          </span>
          <span className="flex-1 text-center p-1">Unread</span>
        </div>
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto h-full sidebar-item-spacing">
        {/* FAVORITES */}
        <ChatList title="FAVORITES" />
        {/* CHATS */}
        <ChatList title="CHATS" />
      </div>
    </div>
  );
};

export default ChatHistory;
