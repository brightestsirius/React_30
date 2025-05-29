import React from "react";

import Counter from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";
import Pokemons from "./components/Pokemons/Pokemons";

export default function App() {
  return (
    <>
      <Counter />
      <Todos />
      <Pokemons />
    </>
  );
}
