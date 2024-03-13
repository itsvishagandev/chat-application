import { useSelector } from "react-redux";
import { Avatar } from "../../../../components";
import { AppState } from "../../../../store";

const UserInfo = () => {
  const user = useSelector((state: AppState) => state.user);

  return (
    <div className="flex items-center gap-4 sidebar-item-spacing">
      <Avatar imgURl={user?.profile?.picture} active={true} size="64px" />
      <div>
        <h3 className="text-2xl">{user?.profile?.name}</h3>
        <div className="flex gap-2 items-center">
          <span className="text-textMuted-600">Good Morning</span>
          <img src="/sunrise.png" width="28px" alt="sun rise" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
