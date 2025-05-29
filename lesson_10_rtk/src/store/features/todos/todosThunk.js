import { createAsyncThunk } from "@reduxjs/toolkit";

import service from "./../../../services/mockapi";

const thunks = {
  fetchTodos: createAsyncThunk("todos/fetchTodos", async () => {
    const response = await service.get(`todos`);
    return response;
  }),
  fetchItemUpdate: createAsyncThunk(
    "todos/fetchItemUpdate",
    async (item, thunkApi) => {
      await service.put(`todos`, item.id, { completed: !item.completed });
      thunkApi.dispatch(thunks.fetchTodos());
    }
  ),
};

export default thunks;
