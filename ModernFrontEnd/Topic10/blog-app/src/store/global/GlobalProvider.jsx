import React, { createContext, useContext, useReducer, useState } from "react";
import { TYPES } from "./types";

export const globalContext = createContext();

const initialState = {
  favorites: [],
  is_loading: false,
  is_show_panel: false,
};

function reducer(state, action) {
  switch (action.type) {
    // case TYPES.TOGGLE_FAV:
    //   const id = action.payload.id;
    //   const data = action.payload.data;

    //   const isFav = state.favorites.find((item) => item.id == id);

    //   if (isFav) {
    //     const filterFav = state.favorites.filter((item) => item.id != id);
    //     return { ...state, favorites: filterFav };
    //   } else {
    //     return { ...state, favorites: [...state.favorites, data] };
    //   }

    case TYPES.TOGGLE_FAV:
      return { ...state, favorites: action.payload };

    case TYPES.IS_LOADING:
      return { ...state, is_loading: action.payload };

    case "SHOW_PANEL":
      return { ...state, is_show_panel: action.payload };

    default:
      return state;
  }
}

function GlobalProvider({ children }) {
  //   const [favorites, setFavorites] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}

export default GlobalProvider;

export const useGlobalStore = () => {
  const value = useContext(globalContext);
  return value;
};
