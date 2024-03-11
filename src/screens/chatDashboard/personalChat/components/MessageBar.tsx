import { AddIcon, MicIcon, SendIcon } from "../../../../assets/svg";

const MessageBar = () => {
  return (
    <div
      className="flex justify-between items-center gap-5 bg-white px-8 py-5"
      style={{
        boxShadow: "0px -8px 80px 0px #0000000D",
      }}
    >
      <div className="flex justify-end items-center gap-3">
        <button className="flex justify-center items-center bg-white w-10 h-10 border border-[#EEF0F7] rounded-full">
          <AddIcon />
        </button>
        <button className="flex justify-center items-center bg-secondary w-10 h-10 rounded-full">
          <MicIcon />
        </button>
      </div>
      <div className="flex justify-end items-center gap-3 flex-1">
        <input
          type="text"
          className="bg-secondary w-full max-w-[490px] h-10 rounded-3xl p-4 text-sm placeholder:text-textMuted-800"
          placeholder="Type your message..."
        />
        <button className="flex justify-center items-center bg-primary w-10 h-10 rounded-full">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageBar;
