import React, { useContext } from "react";

import AppContext from "../../../contexts/AppContext";

export default function ListItem({ item }) {
  const {
    color: { color },
  } = useContext(AppContext);

  const getClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);
    return classes.join(` `);
  };

  const itemStyle = {
    color: item.completed && color,
  };

  return (
    <li className={getClassName(item)} style={itemStyle}>
      {item.title}
    </li>
  );
}
