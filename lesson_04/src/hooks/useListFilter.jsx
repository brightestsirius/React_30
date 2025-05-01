import React, { useState, useEffect } from "react";

import { FILTER_COMPLETED, FILTER_PROGRESS } from "../constants/CRUD";

export default function useListFilter(list, filter) {
  const [filteredList, setFileteredList] = useState([]);

  useEffect(() => {
    switch (filter) {
      case FILTER_COMPLETED:
        setFileteredList(list.filter((item) => item.completed));
        break;
      case FILTER_PROGRESS:
        setFileteredList(list.filter((item) => !item.completed));
        break;
      default:
        setFileteredList(list);
    }
  }, [list, filter]);

  return { filteredList };
}
