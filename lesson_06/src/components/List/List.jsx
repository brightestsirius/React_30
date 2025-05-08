import React, { useContext } from "react";
import "./style.sass";

import TodosContext from "../../contexts/todosContext";
import useFilteredList from "./../../hooks/useFilteredList";

export default function List() {
  const { list, filter } = useContext(TodosContext);
  const { filteredList } = useFilteredList(list, filter);

  const getClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);
    return classes.join(` `);
  };

  return filteredList.length ? (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id} className={getClassName(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  ) : null;
}
