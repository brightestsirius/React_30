import React, { useEffect, useState } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import styles from './TodosList.module.sass'

import { TODO_ASC, TODO_DESC } from "../../constants/todos";

export default function TodosList() {
  const todos = useLoaderData();
  const [sortedTodos, setSortedTodos] = useState([]);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get(`sort`);

  useEffect(() => {
    switch (sort) {
      case TODO_ASC:
        setSortedTodos(todos.sort((a, b) => a.completed - b.completed));
        break;
      case TODO_DESC:
        setSortedTodos(todos.sort((a, b) => b.completed - a.completed));
        break;
      default:
        setSortedTodos(todos);
    }
  }, [sort, todos]);

  const getItemClassName = item => {
    const classes = [styles[`item`]];
    item.completed && classes.push(styles[`item--completed`]);

    return classes.join(` `);
  }

  return sortedTodos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <li key={item.id}>
          <Link to={`/todos/${item.id}`} className={getItemClassName(item)}>{item.title}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
