import { useState } from "react";
import { AddIcon, MicIcon, SendIcon } from "../../../../assets/svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { sendMessage } from "../../../../store/slices/chats";

interface IMessage {
  userID: number;
  chatID: string;
  endUserID: string;
}

const MessageBar = ({ userID, chatID, endUserID }: IMessage) => {
  const dispatch: AppDispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    const payload = {
      chatID,
      userID,
      endUserID,
      messageData: {
        text: message,
        sentBy: `${userID}`,
        date: new Date().toISOString(),
      },
    };
    if (!!message) {
      dispatch(sendMessage(payload));
      setMessage("");
    }
  };

  return (
    <div
      className="flex justify-between items-center gap-5 bg-white px-8 py-5"
      style={{
        boxShadow: "0px -8px 80px 0px #0000000D",
      }}
    >
      <div className="flex justify-end items-center gap-3">
        <button className="flex justify-center items-center bg-white w-10 h-10 border border-[#EEF0F7] rounded-full cursor-not-allowed">
          <AddIcon />
        </button>
        <button className="flex justify-center items-center bg-secondary w-10 h-10 rounded-full cursor-not-allowed">
          <MicIcon />
        </button>
      </div>
      <div className="flex justify-end items-center gap-3 flex-1">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          className="bg-secondary w-full max-w-[490px] h-10 rounded-3xl p-4 text-sm placeholder:text-textMuted-800"
          placeholder="Type your message..."
        />
        <button
          disabled={!message}
          onClick={handleSendMessage}
          className="flex justify-center items-center bg-primary w-10 h-10 rounded-full"
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageBar;
