import { useSelector } from "react-redux";
import { ChatList } from "../../../../components";
import { AppState } from "../../../../store";

const SearchResult = () => {
  const { searchedUsers } = useSelector((state: AppState) => state.UserSearch);

  return (
    <div className="flex-grow flex flex-col gap-5 h-full overflow-hidden">
      <div className="flex flex-col gap-5 overflow-y-auto h-full sidebar-item-spacing">
        {/* Search Result */}
        <ChatList usersData={searchedUsers} title="SEARCH RESULT" />
      </div>
    </div>
  );
};

export default SearchResult;
