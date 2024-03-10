import Avatar from "./Avatar";

const MessageBubble = () => {
  return (
    <div className="flex items-end  gap-5">
      <Avatar size="40px" />
      <div className="flex items-center gap-4">
        <div className="bg-white max-w-[300px] rounded-3xl rounded-b-none rounded-l-3xl p-4">
          <span className="text-sm text-textMuted-300">
            Hello, how are you? Let's go on vacation, I have exciting vacation
            plans!
          </span>
        </div>
        <span className="text-sm text-textMuted-800">08:12</span>
      </div>
    </div>
  );
};

export default MessageBubble;
