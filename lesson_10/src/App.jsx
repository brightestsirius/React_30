import React from "react";

import { Counter } from "./components/Counter/Counter";
import Todos from "./components/Todos/Todos";
import Pokemon from "./components/Pokemon/Pokemon";

export default function App() {
  return (
    <>
      <Counter />
      <hr />
      <Todos />
      <Pokemon />
    </>
  );
}
