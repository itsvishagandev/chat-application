import { Files, Profile } from "./components";

const UserProfile = () => {
  return (
    <aside className="basis-1/4 flex flex-col h-screen bg-white overflow-hidden">
      <Profile />
      <Files />
    </aside>
  );
};

export default UserProfile;
