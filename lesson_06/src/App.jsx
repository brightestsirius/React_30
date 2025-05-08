import React from "react";

import Filter from "./components/Filter/Filter";
import List from "./components/List/List";
import Statistics from "./components/Statistics/Statistics";
import ColorPicker from "./components/ColorPicker/ColorPicker";

import useFilter from "./components/Filter/useFilter";
import useList from "./components/List/useList";
import useColorPicker from "./components/ColorPicker/useColorPicker";

import AppContext from "./contexts/AppContext";
import ListFilterContext from "./contexts/ListFilterContext";

export default function App() {
  const list = useList(`todos`); // {list}
  const filter = useFilter(); // {filter, handleSetFilter}
  const color = useColorPicker(); // {color, handleSetColor}

  return (
    <AppContext.Provider value={{ list, color }}>
      <Statistics />
      <ColorPicker />
      <ListFilterContext.Provider value={{ filter }}>
        <Filter />
        <List />
      </ListFilterContext.Provider>
    </AppContext.Provider>
  );
}
