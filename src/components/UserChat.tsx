import Avatar from "./Avatar";

const UserChat = () => {
  return (
    <li className="flex items-center gap-4">
      <Avatar />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <p className="">Eleanor Pena</p>
          <span className="text-xs text-textMuted-600">9:13 AM</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-textMuted-600">Eleanor Pena</p>
          <span className="flex justify-center items-center text-xs text-white bg-primary rounded-full px-0.5 aspect-square">
            14
          </span>
        </div>
      </div>
    </li>
  );
};

export default UserChat;
