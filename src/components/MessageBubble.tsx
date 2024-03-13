import { useSelector } from "react-redux";
import { IMessage } from "../screens/chatDashboard/personalChat/components/Preview";
import Avatar from "./Avatar";
import { AppState } from "../store";
import { getTime } from "../utils";

interface IMessageBubble {
  picture: string;
  message: IMessage;
  key: number;
}

const MessageBubble = ({ picture, message }: IMessageBubble) => {
  const user = useSelector((state: AppState) => state.user);

  const isUser = `${message.sentBy}` === `${user.id}`;
  return (
    <div className={`flex items-end gap-5 ${isUser ? "justify-end" : ""}`}>
      {!isUser && <Avatar imgURl={picture} size="40px" />}
      <div
        className={`flex items-center gap-4 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`max-w-[300px] rounded-3xl rounded-b-none rounded-l-3xl p-4 ${
            isUser ? "bg-gray-100" : "bg-white"
          }`}
        >
          <span className="text-sm text-textMuted-300">{message?.text}</span>
        </div>
        {message?.date && (
          <span className="text-sm text-textMuted-800">
            {getTime(message?.date)}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
