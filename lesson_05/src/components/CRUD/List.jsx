import React, { useEffect, useState } from "react";

import ListItem from "./ListItem";

import service from "../../services/mockapi";

import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../../constants/todos";

export default function List({ list, getList, filter, color }) {
  console.log(`🔄 in List`);

  const [filteredList, setFilteredList] = useState(list);

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFilteredList(list.filter((item) => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteredList(list.filter((item) => !item.completed));
        break;
      default:
        setFilteredList(list);
        break;
    }
  }, [list, filter]);

  const sortedList = structuredClone(filteredList).sort(
    (a, b) => a.completed - b.completed
  );

  const handleItemDelete = async (id) => {
    try {
      await service.delete(`todos`, id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      await service.put(`todos`, item.id, { completed: !item.completed });
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  return sortedList.length ? (
    <ul>
      {sortedList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleItemDelete={handleItemDelete}
          handleItemCompleted={handleItemCompleted}
          color={color}
        />
      ))}
    </ul>
  ) : null;
}
