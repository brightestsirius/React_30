import React, { useContext } from "react";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../../constants/todos";

import TodosContext from "../../contexts/todosContext";

export default function Filter() {
  const { filter, handleSetFilter } = useContext(TodosContext);

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
}
