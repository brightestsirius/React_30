import React from "react";

import Button from "./../Button/Button";

import { handleEvent } from "./../../utils";

export default function ListItem({
  item,
  handleItemDelete,
  handleItemCompleted,
}) {
  const getItemClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);

    return classes.join(` `);
  };

  return (
    <li
      className={getItemClassName(item)}
      onClick={() => handleItemCompleted(item)}
    >
      {item.title}{" "}
      <Button
        title={"Delete"}
        handleClick={(event) => handleEvent(event, handleItemDelete, [item.id])}
      />
    </li>
  );
}
