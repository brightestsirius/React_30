import React, { useContext } from "react";

import ListContext from "../../contexts/ListContext";

export default function UL() {
  const { state, handleItemDelete } = useContext(ListContext);

  return (
    <ul>
      {state.filteredList.map((item) => (
        <li key={item.id} style={{ color: item.completed && state.color }}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
