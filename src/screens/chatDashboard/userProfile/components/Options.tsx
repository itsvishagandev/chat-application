import { CallIcon, MessageIcon, OptionIcon } from "../../../../assets/svg";

const Options = () => {
  return (
    <div className="max-w-64  w-full flex items-center justify-between gap-5 mt-6">
      <div className="flex flex-col items-center gap-2">
        <CallIcon />
        <span className="text-sm text-textMuted-900">Call</span>
      </div>
      <div className="h-6 w-[1px] bg-[#D6DCE0]" />
      <div className="flex flex-col items-center gap-2">
        <MessageIcon />
        <span className="text-sm text-textMuted-900">Message</span>
      </div>
      <div className="h-6 w-[1px] bg-[#D6DCE0]" />
      <div className="flex flex-col items-center gap-2">
        <OptionIcon />
        <span className="text-sm text-textMuted-900">More</span>
      </div>
    </div>
  );
};

export default Options;
