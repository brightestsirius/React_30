import React, { useState, useEffect, useRef } from "react";
import "./style.sass";
import { handleClick } from "./../../utils";

const API = `https://jsonplaceholder.typicode.com/todos`;

export default function CRUD() {
  const [list, setList] = useState([]);
  const [listSorted, setListSorted] = useState([]);

  const formTitleRef = useRef();
  const formCompletedRef = useRef();

  const getList = async () => {
    try {
      const request = await fetch(API),
        response = await request.json();

      setList(response.slice(0, 10));
    } catch (err) {
      console.log(err);
    }
  };

  const getItemClassName = (item) => {
    const classes = [`list__item`];
    item.completed && classes.push(`list__item--completed`);

    return classes.join(` `);
  };

  const handleItemDelete = async (id) => {
    try {
      await fetch(`${API}/${id}`, { method: `DELETE` });
      setList((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemComplete = async (item) => {
    try {
      const request = await fetch(`${API}/${item.id}`, {
          method: `PATCH`,
          body: JSON.stringify({ completed: !item.completed }),
          headers: { "Content-type": "application/json" },
        }),
        response = await request.json();

      setList((prevState) =>
        prevState.map((el) => {
          if (el.id === response.id) el = response;
          return el;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newTodo = {
      title: formTitleRef.current.value,
      completed: formCompletedRef.current.checked,
    };

    try {
      const request = await fetch(API, {
          method: `POST`,
          body: JSON.stringify(newTodo),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setList((prevState) => [...prevState, response]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    list.length &&
      setListSorted(
        structuredClone(list).sort((a, b) => a.completed - b.completed)
      );
  }, [list]);

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <label>
          Title:{" "}
          <input type="text" ref={formTitleRef} defaultValue={`New todo`} />
        </label>
        <label>
          Completed:{" "}
          <input type="checkbox" ref={formCompletedRef} defaultChecked={true} />
        </label>
        <button>Add todo</button>
      </form>

      {list.length ? (
        <ul>
          {listSorted.map((item) => (
            <li
              key={item.id}
              className={getItemClassName(item)}
              onClick={() => handleItemComplete(item)}
            >
              {item.title}{" "}
              <button
                onClick={(event) =>
                  handleClick(event, handleItemDelete, item.id)
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
