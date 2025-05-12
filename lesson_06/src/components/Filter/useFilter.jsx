import React from "react";

import { TODOS_FILTER_ALL } from "../../constants/todos";

import useLocalStorage from "../../hooks/useLocalStorage";

export default function useFilter() {
  const [filter, setFilter] = useLocalStorage(`filter`, TODOS_FILTER_ALL);

  const handleSetFilter = (e) => setFilter(e.target.value);

  return { filter, handleSetFilter };
}
