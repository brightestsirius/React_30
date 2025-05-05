import React, { useState, useEffect, memo } from "react";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../../constants/todos";

// Lifting State Up

export default memo(function Filter({liftingFilter}) {
  console.log(`🔄 in Filter`);

  const [filter, setFilter] = useState(TODOS_FILTER_ALL);

  const handleSetFilter = (e) => setFilter(e.target.value);

  useEffect(() =>{
    liftingFilter(filter);
  }, [filter])

  return (
    <div>
      Filter:{" "}
      <select defaultValue={filter} onChange={handleSetFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_PROGRESS}>In progress</option>
      </select>
    </div>
  );
});