export interface TAvatar {
  active?: boolean;
  imgURl?: string;
  size?: string;
}

const Avatar = ({
  active,
  imgURl = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
  size = "52px",
}: TAvatar) => {
  return (
    <div key={size} className={`avatar ${active ? "online" : ""}`}>
      <div
        className="rounded-full"
        style={{
          width: size,
        }}
      >
        <img src={imgURl} alt="user profile" />
      </div>
    </div>
  );
};

export default Avatar;
