import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 11,
  user: null,
  current_chat: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    fillUser: (state, action) => {
      state.user = action.payload;
      // const data = action.payload;

      // if (data.age > 10) {
      //   state.user = data;
      //   return;
      // }

      // state.user = {};
    },

    increment: (state) => {
      //  const newstate= [...state.current_chat]
      //  newstate[1] =
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, fillUser } =
  userSlice.actions;

export default userSlice.reducer;
