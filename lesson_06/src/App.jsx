import React from "react";
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";

import TodosContext from "./contexts/todosContext";

import useList from "./hooks/useList";
import useFilter from "./hooks/useFilter";

export default function App() {
  const list = useList();
  const filter = useFilter();

  return (
    <TodosContext.Provider value={{ ...list, ...filter }}>
      <Filter />
      <List />
    </TodosContext.Provider>
  );
}