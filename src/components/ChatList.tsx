import { IUser } from "../lib/data/Types";
import UserChat from "./UserChat";

interface TChatList {
  title: string;
  usersData: IUser[];
}

const ChatList = ({ title, usersData }: TChatList) => {
  return (
    <div>
      <h6 className="text-sm text-textMuted-600 uppercase mb-4">{title}</h6>
      {!!usersData?.length ? (
        <ul className="flex flex-col gap-1">
          {usersData.map((user, i) => (
            <UserChat data={user} key={i} />
          ))}
        </ul>
      ) : (
        <p className="text-base text-textMuted-700">
          There is no {title.toLowerCase()}
        </p>
      )}
    </div>
  );
};

export default ChatList;
