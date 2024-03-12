import { Routes, Route, Navigate } from "react-router-dom";
import ChatDashBoard from "../screens/chatDashboard";
import { UserListData } from "../lib/data";

const AppRouter = () => {
  const defaultUserID = UserListData[0].id;
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultUserID}`} />} />
      <Route path="/:userId" element={<ChatDashBoard />} />
    </Routes>
  );
};

export default AppRouter;
