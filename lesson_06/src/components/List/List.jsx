import React, { useContext } from "react";
import "./style.sass";

import AppContext from "../../contexts/AppContext";
import ListFilterContext from "../../contexts/ListFilterContext";

import useFilteredList from "./useFilteredList";

import ListItem from "./ListItem/ListItem";

export default function List() {
  const {
    list: { list },
  } = useContext(AppContext);
  const {
    filter: { filter },
  } = useContext(ListFilterContext);

  const { filteredList: listToRender } = useFilteredList(list, filter);

  return listToRender.length ? (
    <ul>
      {listToRender.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
