import React, { useState, useEffect } from "react";
import "./style.sass";
import { handleEvent } from "./../../utils";

// Read
// Delete

// hook
// useFetch, axios – fetching

const API = `https://jsonplaceholder.typicode.com/todos`;

export default function CRUD() {
  const [list, setList] = useState([]);

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
      await fetch(API + `/${id}`, { method: `DELETE` });
      setList((prevState) => prevState.filter((item) => item.id !== id));
      // getList(); – real API insted setList
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      const request = await fetch(API + `/${item.id}`, {
          method: `PATCH`,
          body: JSON.stringify({ completed: !item.completed }),
          headers: {
            "Content-type": "application/json",
          },
        }),
        response = await request.json();

      setList((prevState) =>
        prevState.map((element) => {
          if (element.id === response.id) element = response;
          return element;
        })
      );
      // getList(); – real API insted setList
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    console.log(`list`, list);
  }, [list]);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          className={getItemClassName(item)}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}{" "}
          <button
            onClick={(event) => handleEvent(event, handleItemDelete, [item.id])}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
