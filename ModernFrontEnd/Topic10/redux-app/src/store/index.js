import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import todoSlice from "./todoSlice";

export const store = configureStore({
  reducer: {
    user_state: userSlice,
    todo_state: todoSlice,
    // setting:settingSlice
  },
});
