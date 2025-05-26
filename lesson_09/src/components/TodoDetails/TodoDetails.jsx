import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import service from "../../services/mockapi";

export default function TodoDetails() {
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
    <div>
      <h2>Todo Details</h2>
      {Object.keys(todo).length ? <p>Title: {todo.title}</p> : null}
    </div>
  );
}
