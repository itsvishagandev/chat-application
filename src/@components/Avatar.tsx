// enum Status {
//   online,
//   offline,
// }
export interface TAvatar {
  active?: boolean;
  size?: string;
}

const Avatar = ({ active, size = "52px" }: TAvatar) => {
  return (
    <div key={size} className={`avatar ${active ? "online" : ""}`}>
      <div
        className="rounded-full"
        style={{
          width: size,
        }}
      >
        <img
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          alt="user profile"
        />
      </div>
    </div>
  );
};

export default Avatar;
