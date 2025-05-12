import React, { useContext } from "react";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../../store/todosSlice/constants";

import TodosContext from "../../contexts/TodosContext";

export default function Filter() {
  const { state, handleSetFilter } = useContext(TodosContext);

  return (
    <p>
      Filter:{" "}
      <select defaultValue={state.filter} onChange={handleSetFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_PROGRESS}>Progress</option>
      </select>
    </p>
  );
}
