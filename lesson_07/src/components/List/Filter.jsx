import React, { useContext } from "react";

import ListContext from "../../contexts/ListContext";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../../store/todos/constants";

export default function Filter() {
  const { handleSetFilter } = useContext(ListContext);

  return (
    <p>
      Select:{" "}
      <select onChange={handleSetFilter} defaultValue={TODOS_FILTER_ALL}>
        <option value={TODOS_FILTER_ALL}>TODOS_FILTER_ALL</option>
        <option value={TODOS_FILTER_COMPLETED}>TODOS_FILTER_COMPLETED</option>
        <option value={TODOS_FILTER_PROGRESS}>TODOS_FILTER_PROGRESS</option>
      </select>
    </p>
  );
}
