import React from "react";

import List from "./List";
import Filter from "./Filter";

import TodosContext from "./../../contexts/TodosContext";

import useTodos from "./useTodos";

export default function Todos() {
  const todos = useTodos();

  return todos.state.list.length ? (
    <TodosContext.Provider value={{ ...todos }}>
      <Filter />
      <List />
    </TodosContext.Provider>
  ) : null;
}
