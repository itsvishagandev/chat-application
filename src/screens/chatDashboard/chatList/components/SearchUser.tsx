import { useDispatch, useSelector } from "react-redux";
import { SearchIcon } from "../../../../assets/svg";
import { searchUser } from "../../../../store/slices/userSearch";
import { AppDispatch, AppState } from "../../../../store";

const SearchUser = () => {
  const user = useSelector((state: AppState) => state.user);
  const UserSearch = useSelector((state: AppState) => state.UserSearch);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="sidebar-item-spacing">
      <div className="flex items-center relative">
        <div className="absolute left-3">
          <SearchIcon />
        </div>
        <input
          type="text"
          // value={UserSearch?.searchQuery}
          className="w-full text-sm font-normal border border-lightBlue-100 h-12 p-3 ps-11 rounded-lg placeholder:text-textMuted-600"
          placeholder="Search People..."
          onChange={(e) =>
            dispatch(
              searchUser({ searchQuery: e.target.value, userID: user.id })
            )
          }
        />
      </div>
    </div>
  );
};

export default SearchUser;
