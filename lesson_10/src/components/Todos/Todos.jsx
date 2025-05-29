import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, fetchItemCompleted } from "./../../store/features/todos/todosSlice";

export default function Todos() {
  const { todos, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCompleted = item => {
    dispatch(fetchItemCompleted(item));
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <li style={{ color: item.completed && `crimson` }} key={item.id} onClick={()=>handleCompleted(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  ) : null;
}
