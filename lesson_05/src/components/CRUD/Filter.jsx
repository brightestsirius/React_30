import React, { useEffect, memo } from "react";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../../constants/todos";

import useLocalStorage from "./../../hooks/useLocalStorage";

export default memo(function Filter({ liftingFilter }) {
  console.log(`🔄 in Filter`);

  const [filter, setFilter] = useLocalStorage(`filter`, TODOS_FILTER_ALL);

  const handleFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <div>
      Filter:{" "}
      <select defaultValue={filter} onChange={handleFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_PROGRESS}>Progress</option>
      </select>
    </div>
  );
});
