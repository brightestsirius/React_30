import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import thunks from "../../store/features/todos/todosThunk";

export default function Todos() {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.fetchTodos());
  }, []);

  if(isLoading) return <p>Loading...</p>

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li
          key={item.id}
          style={{ color: item.completed && `crimson` }}
          onClick={() => dispatch(thunks.fetchItemUpdate(item))}
        >
          {item.title}
        </li>
      ))}
    </ul>
  ) : null;
}
