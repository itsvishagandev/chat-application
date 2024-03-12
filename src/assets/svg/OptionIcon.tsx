import { TSvg } from "./types";

const OptionIcon = ({ width, height, fill }: TSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "32"}
      height={height || "32"}
      viewBox="0 0 32 32"
      fill="none"
    >
      <g clipPath="url(#clip0_2_134)">
        <path
          d="M8 16C8 16.2652 8.10536 16.5196 8.29289 16.7071C8.48043 16.8946 8.73478 17 9 17C9.26522 17 9.51957 16.8946 9.70711 16.7071C9.89464 16.5196 10 16.2652 10 16C10 15.7348 9.89464 15.4804 9.70711 15.2929C9.51957 15.1054 9.26522 15 9 15C8.73478 15 8.48043 15.1054 8.29289 15.2929C8.10536 15.4804 8 15.7348 8 16Z"
          fill={fill || "#417DD9"}
          stroke={fill || "#417DD9"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16Z"
          fill={fill || "#417DD9"}
          stroke={fill || "#417DD9"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 16C22 16.2652 22.1054 16.5196 22.2929 16.7071C22.4804 16.8946 22.7348 17 23 17C23.2652 17 23.5196 16.8946 23.7071 16.7071C23.8946 16.5196 24 16.2652 24 16C24 15.7348 23.8946 15.4804 23.7071 15.2929C23.5196 15.1054 23.2652 15 23 15C22.7348 15 22.4804 15.1054 22.2929 15.2929C22.1054 15.4804 22 15.7348 22 16Z"
          fill={fill || "#417DD9"}
          stroke={fill || "#417DD9"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_134">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default OptionIcon;
