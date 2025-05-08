import React, { useState, useEffect } from "react";

import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../../constants/todos";

export default function useFilteredList(list, filter) {
  const [filteredList, setFileterdList] = useState([]);

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFileterdList(list.filter((item) => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFileterdList(list.filter((item) => !item.completed));
        break;
      default:
        setFileterdList(list);
    }
  }, [list, filter]);

  return { filteredList };
}
