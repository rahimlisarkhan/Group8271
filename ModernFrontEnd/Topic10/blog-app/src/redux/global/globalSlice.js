import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  is_loading: false,
};

// const a = [1,2,3,4,5]

// // const result = a.find(item=>item == 5)
// const result = a.filter(item=>item == 5)

// // console.log('result',result); //? 5
// console.log('result',result); //? [5]

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload.id;
      const data = action.payload.data;

      const isFav = state.favorites.find((item) => item.id == id);

      if (isFav) {
        const filterFav = state.favorites.filter((item) => item.id != id);
        state.favorites = filterFav;
      } else {
        state.favorites = [...state.favorites, data];
      }
    },

    increment: (state) => {
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
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, toggleFavorite } =
  globalSlice.actions;

export default globalSlice.reducer;

export const selFavorites = (state) => state.global.favorites;
