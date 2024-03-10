import { SearchIcon } from "../../../../assets/svg";

const SearchUser = () => {
  return (
    <div className="sidebar-item-spacing">
      <div className="flex items-center relative">
        <div className="absolute left-3">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="w-full text-sm font-normal border border-lightBlue-100 h-12 p-3 ps-11 rounded-lg placeholder:text-textMuted-600"
          placeholder="Search People..."
        />
      </div>
    </div>
  );
};

export default SearchUser;
