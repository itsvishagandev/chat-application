import { Avatar } from "../../../../@components";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-4 cursor-pointer sidebar-item-spacing">
      <Avatar active={true} size="64px" />
      <div>
        <h3 className="text-2xl">Maria Luisa</h3>
        <div className="flex gap-2 items-center">
          <span className="text-textMuted-600">Good Morning</span>
          <img src="/sunrise.png" width="28px" alt="sun rise" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
