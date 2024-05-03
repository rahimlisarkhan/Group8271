import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BlogType } from "@/interface/data";
import { RootState } from "../store";

interface GlobalStateType {
  favorites: [] | BlogType[];
  is_loading: boolean;
}

const initialState: GlobalStateType = {
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
    toggleFavorite: (
      state,
      // action: PayloadAction<{ id: number; data: BlogType }>
      action: PayloadAction<{ id: BlogType["id"]; data: BlogType }>
    ) => {
      const id = action.payload.id;
      const data = action.payload.data;

      const isFav = state.favorites.find(
        (item: BlogType, index: number) => item.id == id
      );

      if (isFav) {
        const filterFav = state.favorites.filter(
          (item: BlogType) => item.id != id
        );

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

export const selFavorites = (state: RootState) => state.global.favorites;
