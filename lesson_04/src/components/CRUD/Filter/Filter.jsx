import React, { useState, useEffect } from "react";
import {
  FILTER_ALL,
  FILTER_COMPLETED,
  FILTER_PROGRESS,
} from "../../../constants/CRUD";

export default function Filter({ liftingFilter }) {
  const [filter, setFilter] = useState(FILTER_ALL);

  const handleSetFilter = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <div>
      Filter:
      <select defaultValue={filter} onChange={handleSetFilter}>
        <option value={FILTER_ALL}>All</option>
        <option value={FILTER_COMPLETED}>Completed</option>
        <option value={FILTER_PROGRESS}>In progress</option>
      </select>
    </div>
  );
}
