import { TSvg } from "./types";

const FileIcon = ({ width, height, fill }: TSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1_55)">
        <path
          d="M11.6667 2.5V5.83333C11.6667 6.05435 11.7545 6.26631 11.9108 6.42259C12.0671 6.57887 12.2791 6.66667 12.5001 6.66667H15.8334"
          stroke={fill || "#757575"}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1667 17.5H5.83341C5.39139 17.5 4.96746 17.3244 4.6549 17.0118C4.34234 16.6993 4.16675 16.2754 4.16675 15.8333V4.16667C4.16675 3.72464 4.34234 3.30072 4.6549 2.98816C4.96746 2.67559 5.39139 2.5 5.83341 2.5H11.6667L15.8334 6.66667V15.8333C15.8334 16.2754 15.6578 16.6993 15.3453 17.0118C15.0327 17.3244 14.6088 17.5 14.1667 17.5Z"
          stroke={fill || "#757575"}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_55">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FileIcon;
