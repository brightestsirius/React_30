import React, { useState } from "react";

import { TODOS_FILTER_ALL } from "../../constants/todos";

export default function useFilter() {
  const [filter, setFilter] = useState(TODOS_FILTER_ALL);

  const handleSetFilter = (e) => setFilter(e.target.value);

  return { filter, handleSetFilter };
}
