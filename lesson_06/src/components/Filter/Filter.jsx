import React, { useContext, memo } from "react";

import ListFilterContext from "../../contexts/ListFilterContext";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../../constants/todos";

export default memo(function Filter() {
  const {
    filter: { filter, handleSetFilter },
  } = useContext(ListFilterContext);

  return (
    <div>
      Filter:{" "}
      <select defaultValue={filter} onChange={handleSetFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_PROGRESS}>Progress</option>
      </select>
    </div>
  );
});
