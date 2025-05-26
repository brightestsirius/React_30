import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_NON_COMPLETED,
  TODOS_FILTER_ALL,
} from "./../../constants/todos";
import styles from "./TodosFilter.module.sass";

export default function TodosFilter() {
  const [filter, setFilter] = useState(TODOS_FILTER_ALL);

  const handleSetFilter = (e) => setFilter(e.target.value);

  return (
    <div className={styles.filter}>
      Todos Filter:{" "}
      <select defaultValue={filter} onChange={handleSetFilter}>
        <option value={TODOS_FILTER_ALL}>All</option>
        <option value={TODOS_FILTER_COMPLETED}>Completed</option>
        <option value={TODOS_FILTER_NON_COMPLETED}>Progress</option>
      </select>
      <Link to={`/todos?filter=${filter}`}>Get {filter}</Link>
    </div>
  );
}
