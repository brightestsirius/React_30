import React from "react";

import useList from "./useList";

import UL from "./UL";
import Filter from "./Filter";

import ListContext from "./../../contexts/ListContext";

export default function List() {
  const listContext = useList();

  return (
    <ListContext.Provider value={listContext}>
      <Filter />
      <UL />
    </ListContext.Provider>
  );
}
