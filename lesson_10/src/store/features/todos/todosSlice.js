import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import service from "../../../services/mockapi";

const initialState = {
  todos: [],
  isLoading: false,
};

const thunks = {
  fetchTodos: createAsyncThunk("todos/fetchTodos", async () => {
    const response = await service.get(`todos`);
    return response;
  }),
  fetchItemCompleted: createAsyncThunk(
    "todos/fetchItemCompleted",
    async (item, thunkApi) => {
      await service.put(`todos`, item.id, { completed: !item.completed });
      thunkApi.dispatch(thunks.fetchTodos());
    }
  ),
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.todos = payload;
    },
  },
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
export const { fetchTodos, fetchItemCompleted } = thunks;

export default todosSlice.reducer;
