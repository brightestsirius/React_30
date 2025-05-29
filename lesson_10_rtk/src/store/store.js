import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import counterReducer from "./features/counter/counterSlice";
import todosReducer from "./features/todos/todosSlice";
import { pokemonApi } from "./features/pokemons/pokemonsApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

setupListeners(store.dispatch);
