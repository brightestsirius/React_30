import React, { useCallback, memo } from "react";

import ListItem from "./ListItem";

import service from "../../services/mockapi";

import useTodosFilter from "./../../hooks/useTodosFilter";

export default memo(function List({ list, getList, filter, color }) {
  console.log(`🔄 in List`);

  const { filteredList } = useTodosFilter(list, filter);

  const handleItemDelete = useCallback(async (id) => {
    try {
      await service.delete(`todos`, id);
      getList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleItemCompleted = useCallback(async (item) => {
    try {
      await service.put(`todos`, item.id, { completed: !item.completed });
      getList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return filteredList.length ? (
    <ul>
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleItemDelete={handleItemDelete}
          handleItemCompleted={handleItemCompleted}
          color={color}
        />
      ))}
    </ul>
  ) : null;
});