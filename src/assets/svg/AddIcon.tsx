import { TSvg } from "./types";

const AddIcon = ({ width, height, fill }: TSvg) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "21"}
      height={height || "21"}
      viewBox="0 0 21 21"
      fill="none"
      style={{
        transform: "rotate(45deg)",
      }}
    >
      <path
        d="M16.3734 5.52387L15.1584 4.30879L10.3411 9.12602L5.52392 4.30879L4.30884 5.52387L9.12606 10.3411L4.30884 15.1583L5.52392 16.3734L10.3411 11.5562L15.1584 16.3734L16.3734 15.1583L11.5562 10.3411L16.3734 5.52387Z"
        fill={fill || "#343434"}
      />
    </svg>
  );
};

export default AddIcon;
