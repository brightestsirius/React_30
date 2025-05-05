import React, { memo } from "react";

export default memo(function Statistics({ list }) {
  console.log(`🔄 in Statistics`);

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
});
