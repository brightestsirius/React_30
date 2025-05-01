import React, { useState, useRef } from "react";

import { DEFAULT_TODO } from "./../../../constants/CRUD";
import service from "../../../services/todos";

export default function Form({ getList }) {
  const formRef = useRef();
  const formTitleInput = useRef();
  const formCompletedInput = useRef();

  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.post(newTodo);
      getList();

      formRef.current.reset();
      setNewTodo(DEFAULT_TODO);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));

  const handleInputCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));

  return (
    <form className="form" onSubmit={handleSubmit} ref={formRef}>
      <label>
        Title{" "}
        <input
          type="text"
          ref={formTitleInput}
          defaultValue={newTodo.title}
          onChange={handleInputTitle}
        />
      </label>
      <label>
        Completed{" "}
        <input
          type="checkbox"
          ref={formCompletedInput}
          defaultChecked={newTodo.completed}
          onChange={handleInputCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
