import React, { useEffect } from "react";

import { handleEvent } from "../../../utils";
import service from "../../../services/todos";
import useListFilter from "./../../../hooks/useListFilter";

export default function List({ list, getList, filter }) {
  const { filteredList } = useListFilter(list, filter);

  const getItemClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);

    return classes.join(` `);
  };

  const handleItemDelete = async (id) => {
    try {
      await service.delete(id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      await service.put(item.id, {
        completed: !item.completed,
      });
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return filteredList.length ? (
    <ul>
      {filteredList.map((item) => (
        <li
          key={item.id}
          className={getItemClassName(item)}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}{" "}
          <button
            onClick={(event) => handleEvent(event, handleItemDelete, [item.id])}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
