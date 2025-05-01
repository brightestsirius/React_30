import React from "react";

export default function Statistics({ list }) {
  return list.length ? (
    <div>
      Statistics:
      <ul>
        <li>All: {list.length}</li>
        <li>Completed: {list.filter((item) => item.completed).length}</li>
        <li>In progress: {list.filter((item) => !item.completed).length}</li>
      </ul>
    </div>
  ) : null;
}
