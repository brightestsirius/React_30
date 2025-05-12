import React, { useContext } from "react";

import TodosContext from "../../contexts/TodosContext";

export default function List() {
  const { state, handleItemDelete } = useContext(TodosContext);

  return (
    <ul>
      {state.filteredList.map((item) => (
        <li key={item.id} style={{ color: item.completed && `crimson` }}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
