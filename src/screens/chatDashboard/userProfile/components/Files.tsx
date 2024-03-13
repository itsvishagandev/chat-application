import { FileIcon, HelpIcon, SettingIcon } from "../../../../assets/svg";

const Files = () => {
  return (
    <div className="flex-1 p-7 h-full overflow-y-auto cursor-not-allowed">
      <div>
        <h5 className="text-base text-[#25396F] mb-2">Attachments</h5>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-textMuted-100">Source file</span>
          <button className="text-[10px] text-[##454547] cursor-not-allowed">
            View all
          </button>
        </div>
        <ul>
          <li className="flex items-center gap-2 mb-3">
            <FileIcon />
            <span className="text-xs text-textMuted-100">Poco phone.png</span>
          </li>
          <li className="flex items-center gap-2 mb-3">
            <FileIcon />
            <span className="text-xs text-textMuted-100">Poco phone.png</span>
          </li>
          <li className="flex items-center gap-2 mb-3">
            <FileIcon />
            <span className="text-xs text-textMuted-100">Poco phone.png</span>
          </li>
        </ul>
      </div>
      <div className="pt-1 pb-7 border-b border-[#E2E9FC]">
        <h6 className="text-sm mb-3">Picture & Videos</h6>
        {/* Images */}
        <ul className="flex flex-wrap gap-2">
          <li>
            <img
              src="/image1.png"
              alt="image1"
              className="w-suto h-16 rounded-xl"
            />
          </li>
          <li>
            <img
              src="/image1.png"
              alt="image1"
              className="w-suto h-16 rounded-xl"
            />
          </li>
          <li>
            <img
              src="/image1.png"
              alt="image1"
              className="w-suto h-16 rounded-xl"
            />
          </li>
          <li>
            <img
              src="/image1.png"
              alt="image1"
              className="w-suto h-16 rounded-xl"
            />
          </li>
          <li>
            <img
              src="/image1.png"
              alt="image1"
              className="w-suto h-16 rounded-xl"
            />
          </li>
        </ul>
      </div>
      <div className="pt-7 pb-4">
        <ul className="flex flex-col gap-8">
          <button className="flex items-center gap-4 cursor-not-allowed">
            <HelpIcon />
            <p className="text-[##757575]">Help</p>
          </button>
          <button className="flex items-center gap-4 cursor-not-allowed">
            <SettingIcon />
            <p className="text-[##757575]">Settings</p>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Files;
