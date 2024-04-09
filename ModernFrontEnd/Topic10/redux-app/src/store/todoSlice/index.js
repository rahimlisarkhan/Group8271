import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    fillTodo: (state, action) => {
      state.todo = action.payload;
    },

    addTodo: (state, action) => {
      state.todo = [action.payload, ...state.todo];
    },

    rmvTodo: (state, action) => {
      const newTodo = state.todo.filter((item) => item.id !== action.payload);
      state.todo = newTodo;
    },

    completedTodo: (state, action) => {
      const currentIndex = action.payload.index;
      const completed = action.payload.completed;

      const newTodo = [...state.todo];

      newTodo[currentIndex].completed = completed;

      state.todo = newTodo;
    },
  },
});

export const { fillTodo, rmvTodo, addTodo, completedTodo } = todoSlice.actions;

export default todoSlice.reducer;
