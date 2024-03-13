import { useSelector } from "react-redux";
import { ChatList } from "../../../../components";
import { AppState } from "../../../../store";
import { filterUserChats } from "../../../../utils";
import { useState } from "react";

const ChatHistory = () => {
  const [tabStatus, setTabStatus] = useState("all");
  const user = useSelector((state: AppState) => state.user);
  const chats = useSelector((state: AppState) => state.chats);

  const personalChats = filterUserChats(chats, user?.id, tabStatus);

  return (
    <div className="flex-grow flex flex-col gap-5 h-full overflow-hidden">
      {/* Filter chats  */}
      <div className="sidebar-item-spacing">
        <div className="flex text-sm p-[2px] rounded-lg bg-gray-100 mb-1">
          {[
            {
              label: "All",
              status: "all",
            },
            {
              label: "Unread",
              status: "unread",
            },
          ].map((tab) => (
            <span
              key={tab.status}
              className={`flex-1 text-center p-1 cursor-pointer ${
                tabStatus === tab.status
                  ? "border border-gray-200 bg-white rounded-lg shadow-[0px 3px 1px 0px #D1D7EA0A]"
                  : ""
              }`}
              onClick={() => setTabStatus(tab.status)}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto h-full sidebar-item-spacing">
        {/* CHATS */}
        <ChatList usersData={personalChats} title="CHATS" />
        {/* FAVORITES */}
        <ChatList usersData={[]} title="FAVORITES" />
      </div>
    </div>
  );
};

export default ChatHistory;
