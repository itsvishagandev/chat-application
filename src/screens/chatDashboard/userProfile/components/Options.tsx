import { Link } from "react-router-dom";
import { CallIcon, MessageIcon, OptionIcon } from "../../../../assets/svg";

const Options = ({ endUserId }: { endUserId: string }) => {
  return (
    <div className="max-w-64  w-full flex items-center justify-between gap-5 mt-6">
      <button className="flex flex-col items-center gap-2 cursor-not-allowed">
        <CallIcon />
        <span className="text-sm text-textMuted-900">Call</span>
      </button>
      <div className="h-6 w-[1px] bg-[#D6DCE0]" />
      <button className="flex flex-col items-center gap-2 cursor-not-allowed">
        <MessageIcon />
        <span className="text-sm text-textMuted-900">Message</span>
      </button>
      <div className="h-6 w-[1px] bg-[#D6DCE0]" />
      <div className="dropdown dropdown-bottom dropdown-end">
        <button
          tabIndex={0}
          // role="button"
          className="flex flex-col items-center gap-2"
        >
          <OptionIcon />
          <span className="text-sm text-textMuted-900">More</span>
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-secondary rounded-box w-52"
        >
          <li className="text-sm p-0">
            <Link
              to={`/${endUserId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Assume Identity
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Options;
