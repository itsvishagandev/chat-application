import { TSvg } from "./types";

const MicIcon = ({ width, height, fill }: TSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "21"}
      height={height || "21"}
      viewBox="0 0 21 21"
      fill="none"
    >
      <g clipPath="url(#clip0_101_569)">
        <g filter="url(#filter0_d_101_569)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.9682 9.41165C12.9682 10.795 11.8516 11.9117 10.4682 11.9117C9.08491 11.9117 7.96824 10.795 7.96824 9.41165V4.41165C7.96824 3.02832 9.08491 1.91165 10.4682 1.91165C11.8516 1.91165 12.9682 3.02832 12.9682 4.41165V9.41165ZM10.4686 13.5783C12.4851 13.5783 14.1685 12.1434 14.5528 10.2396C14.6439 9.78851 15.0083 9.41165 15.4686 9.41165C15.9288 9.41165 16.3082 9.78673 16.2432 10.2424C15.9199 12.5093 14.2924 14.3472 12.1468 14.9916C11.6707 15.1345 11.3019 15.5471 11.3019 16.0442V16.9117C11.3019 17.3719 10.9288 17.745 10.4686 17.745C10.0083 17.745 9.63523 17.3719 9.63523 16.9117V16.0442C9.63523 15.5471 9.26638 15.1345 8.79036 14.9916C6.64472 14.3472 5.01722 12.5093 4.69392 10.2424C4.62894 9.78673 5.00833 9.41165 5.46856 9.41165C5.9288 9.41165 6.29321 9.78851 6.38428 10.2396C6.76862 12.1434 8.45204 13.5783 10.4686 13.5783Z"
            fill={fill || "#989FC9"}
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_101_569"
          x="-17.3134"
          y="-12.0883"
          width="55.5638"
          height="59.8333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="11" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.376471 0 0 0 0 0.32549 0 0 0 0 0.74902 0 0 0 0.21 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_101_569"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_101_569"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_101_569">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.468262 0.244965)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MicIcon;
