import { createSlice } from "@reduxjs/toolkit";
import { UserListData } from "../../lib/data";
import { IUser } from "../../lib/data/Types";

export interface IInitialState {
  searchQuery: string;
  searchedUsers: IUser[];
}

export const initialState: IInitialState = {
  searchQuery: "",
  searchedUsers: [],
};

const userSearchSlice = createSlice({
  name: "userSearch",
  initialState,
  reducers: {
    searchUser: (state, { payload }) => {
      const { searchQuery, userID } = payload;
      const userList = searchQuery
        ? UserListData.filter(
            (user) =>
              user?.profile?.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) &&
              `${user.id}` !== `${userID}`
          )
        : [];
      state.searchQuery = searchQuery;
      state.searchedUsers = userList;
    },
  },
});

export const { searchUser } = userSearchSlice.actions;
export default userSearchSlice;
