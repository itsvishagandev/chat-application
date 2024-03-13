import { ChatList } from "./chatList";
import { useDispatch, useSelector } from "react-redux";
import { PersonalChat } from "./personalChat";
import { UserProfile } from "./userProfile";
import { useParams } from "react-router-dom";
import { AppDispatch, AppState } from "../../store";
import { useEffect } from "react";
import { getActiveUser } from "../../utils";
import { setUser } from "../../store/slices/user";

const ChatDashBoard = () => {
  const { userId } = useParams();

  const user = useSelector((state: AppState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    const activeUser = getActiveUser(userId);
    dispatch(setUser(activeUser));
  }, [userId, dispatch, user]);

  return (
    <section className="flex flex-row">
      <ChatList />
      <PersonalChat />
      <UserProfile />
    </section>
  );
};

export default ChatDashBoard;
