import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import Bears from "./components/Bears/Bears";
import BearsStatistics from "./components/BearsStatistics/BearsStatistics";
import Pokemons from "./components/Pokemons/Pokemons";
import Todos from './components/Todos/Todos'

import queryClient from "./api/QueryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Bears />
      <hr />
      <BearsStatistics />
      <hr />
      <Pokemons />
      <hr />
      <Todos />
    </QueryClientProvider>
  );
}
