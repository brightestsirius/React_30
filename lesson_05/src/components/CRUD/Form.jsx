import React, { useState, useRef, memo } from "react";

import service from "../../services/mockapi";

export default memo(function Form({ getList }) {
  console.log(`🔄 in Form`);

  const formTitleRef = useRef();
  const formCompletedRef = useRef();

  const [newTodo, setNewTodo] = useState({
    title: `New todo`,
    completed: true,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await service.post(`todos`, newTodo);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormTitle = (e) =>
    setNewTodo((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));

  const handleFormCompleted = (e) => {
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));
  };

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          ref={formTitleRef}
          defaultValue={newTodo.title}
          onChange={handleFormTitle}
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          ref={formCompletedRef}
          defaultChecked={newTodo.completed}
          onChange={handleFormCompleted}
        />
      </label>
      <button>Add todo item</button>
    </form>
  );
})