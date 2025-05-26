import React, { useEffect, useState } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import styles from "./TodosList.module.sass";

import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_NON_COMPLETED,
  TODOS_FILTER_ALL,
} from "./../../constants/todos";

export default function TodosList() {
  const todos = useLoaderData();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(`filter`);

  const [filteredTodos, setFilteredTodos] = useState([]);

  const getClassName = (item) => {
    const classes = [styles.item];
    item.completed && classes.push(styles[`item--completed`]);

    return classes.join(` `);
  };

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFilteredTodos(todos.sort((a,b) => a.completed - b.completed));
        break;
      case TODOS_FILTER_NON_COMPLETED:
        setFilteredTodos(todos.sort((a,b) => b.completed - a.completed));
        break;
      case TODOS_FILTER_ALL:
      default:
        setFilteredTodos(todos);
    }
  }, [filter, filteredTodos]);

  return todos.length ? (
    <ul>
      {filteredTodos.map((item) => (
        <li key={item.id}>
          <Link to={`/todos/${item.id}`} className={getClassName(item)}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
}
