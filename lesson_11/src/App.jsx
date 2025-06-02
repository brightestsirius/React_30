import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import Bears from "./components/Bears/Bears";
import Pokemons from "./components/Pockemons/Pokemons";
import Todos from "./components/Todos/Todos";

import queryClient from "./api/QueryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Bears />
      <Pokemons />
      <Todos />
    </QueryClientProvider>
  );
}
