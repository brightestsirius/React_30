import React, { memo, useCallback, useMemo } from "react";

import Button from "./../Button/Button";

import { handleEvent } from "./../../utils";

export default memo(function ListItem({
  item,
  handleItemDelete,
  handleItemCompleted,
  color,
}) {
  console.log(`🔄 in ListItem`, item.id);

  const getItemClassName = useCallback((item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);

    return classes.join(` `);
  }, []);

  const itemStyle = useMemo(
    () => ({
      color: item.completed ? color : `#000`,
    }),
    [color, item.completed]
  );

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
});
