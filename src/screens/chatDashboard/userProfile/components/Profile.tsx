import { Avatar } from "../../../../components";
import Options from "./Options";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-7 pt-4 pb-8 border-b border-[#F0F3F4]">
      <div className="mb-4">
        <Avatar size="60px" />
      </div>
      <h5 className="text-lg text-[##0F3F62]">Robert Luis</h5>
      <div className="flex items-center gap-1">
        <div className="w-2 h-2 bg-success rounded-full" />
        <p className="text-textMuted-900">Online Now</p>
      </div>
      <Options />
    </div>
  );
};

export default Profile;
