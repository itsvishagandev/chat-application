import { Avatar } from "../../../../@components";
import { SearchIcon } from "../../../../assets/svg";

const ChatHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white px-9 pt-6 pb-7">
      <div className="flex items-center gap-5">
        <Avatar size="60px" />
        <div>
          <h3 className="text-2xl mb-1">Robert Luis</h3>
          <div className="flex items-center gap-2">
            <span className="block w-2 h-2 bg-success"></span>
            <p className="text-lg text-textMuted-300">Online</p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer">
        <SearchIcon width="28" height="28" fill="#417DD9" />
      </div>
    </div>
  );
};

export default ChatHeader;
