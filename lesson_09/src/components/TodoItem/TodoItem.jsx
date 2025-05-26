import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import service from "../../services/mockapi";

export default function TodoItem() {
  const { id } = useParams();
  const [todo, setTodo] = useState({});

  const getTodo = async () => {
    const response = await service.get(`todos`, id);
    setTodo(response);
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div style={{border: `1px solid black`}}>
      <h3>Todo Item Component</h3>
      {Object.keys(todo).length ? <p>Title: {todo.title}</p> : null}
    </div>
  );
}
