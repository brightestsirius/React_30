import React, { useState, useEffect } from "react";
import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../constants/todos";

export default function useFilteredList(list, filter) {
  const [filteredList, setFilteredList] = useState(structuredClone(list));

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
    }
  }, [list, filter]);

  return { filteredList };
}
