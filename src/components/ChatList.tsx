import UserChat from "./UserChat";

interface TChatList {
  title: string;
}

const ChatList = ({ title }: TChatList) => {
  return (
    <div>
      <h6 className="text-sm text-textMuted-600 uppercase mb-4">{title}</h6>
      <ul className="flex flex-col gap-5">
        {Array(3)
          .fill("")
          .map((_, i) => (
            <UserChat key={i} />
          ))}
      </ul>
    </div>
  );
};

export default ChatList;
