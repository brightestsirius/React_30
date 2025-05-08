import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";

export default function Statistics() {
  const {
    list: { list },
  } = useContext(AppContext);

  return (
    <div>
      Statistics:{" "}
      <ul>
        <li>All: {list.length}</li>
        <li>Completed: {list.filter((item) => item.completed).length}</li>
        <li>Progress: {list.filter((item) => !item.completed).length}</li>
      </ul>
    </div>
  );
}
