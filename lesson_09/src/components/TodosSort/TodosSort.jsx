import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./TodosSort.module.sass";

import { TODO_ASC, TODO_DESC } from "./../../constants/todos";

export default function TodosSort() {
  const [sort, setSort] = useState(TODO_ASC);

  const handleSetSort = (e) => setSort(e.target.value);

  return (
    <div className={styles.sort}>
      <h3>Todos Sort</h3>
      <select defaultValue={sort} onChange={handleSetSort}>
        <option value={TODO_ASC}>ASC</option>
        <option value={TODO_DESC}>DESC</option>
      </select>

      <Link to={`/todos?sort=${sort}`}>Sort TodoList by {sort}</Link>
    </div>
  );
}
