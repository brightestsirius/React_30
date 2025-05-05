import React, { useEffect } from "react";

import Button from "./../Button/Button";

import { handleEvent } from "./../../utils";

export default function ListItem({
  item,
  handleItemDelete,
  handleItemCompleted,
  color,
}) {
  const getItemClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);

    return classes.join(` `);
  };

  const itemStyle = {
    color: item.completed ? color : `#000`,
  };

  return (
    <li
      className={getItemClassName(item)}
      onClick={() => handleItemCompleted(item)}
      style={itemStyle}
    >
      {item.title}{" "}
      <Button
        title={"Delete"}
        handleClick={(event) => handleEvent(event, handleItemDelete, [item.id])}
      />
    </li>
  );
}
