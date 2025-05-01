import React from "react";

import ListItem from "./ListItem";

import service from "../../services/mockapi";

export default function List({ list, getList }) {
  const handleItemDelete = async (id) => {
    try {
      await service.delete(`todos`, id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      await service.put(`todos`, item.id, { completed: !item.completed });
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleItemDelete={handleItemDelete}
          handleItemCompleted={handleItemCompleted}
        />
      ))}
    </ul>
  ) : null;
}
