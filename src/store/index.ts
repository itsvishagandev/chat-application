import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/user";
import userSearchSlice from "./slices/userSearch";
import chatSlice from "./slices/chats";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  UserSearch: userSearchSlice.reducer,
  chats: chatSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
