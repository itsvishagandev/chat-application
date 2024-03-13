import { UserListData } from "../lib/data";

const getActiveUser = (userId: string | undefined) => {
  return userId ? UserListData.find((user) => user.id === +userId) : {};
};

export default getActiveUser;
