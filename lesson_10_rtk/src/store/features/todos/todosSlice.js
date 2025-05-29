import { createSlice } from "@reduxjs/toolkit";
import thunks from "./todosThunk";

const initialState = {
  todos: [],
  isLoading: false,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(thunks.fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(thunks.fetchTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;
        state.isLoading = false;
      });
  },
});

export const { setTodos } = todosSlice.actions;

export default todosSlice.reducer;