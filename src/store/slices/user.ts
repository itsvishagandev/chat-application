import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../lib/data/Types";

export const initialState: IUser = {
  id: 0,
  profile: {
    name: "",
    picture: "",
    isOnline: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.id = payload.id;
      state.profile.name = payload.profile.name;
      state.profile.picture = payload.profile.picture;
      state.profile.isOnline = true;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice;
