import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./global/globalSlice";

export const store = configureStore({
  reducer: {
    global: globalSlice,
    // setting:settingSlice,
    // user:userSlice,
  },
});
