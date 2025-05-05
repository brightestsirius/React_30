import React, { useState, useEffect, useCallback } from "react";
import "./style.sass";

import service from "../../services/mockapi";

import Form from "./Form";
import Statistics from "./Statistics";
import Filter from "./Filter";
import ColorPicker from "./ColorPicker";
import List from "./List";

export default function CRUD() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();

  const getList = useCallback(async () => {
    try {
      const response = await service.get(`todos`);
      setList(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Form getList={getList} />
      <Statistics list={list} />
      <Filter liftingFilter={setFilter} />
      <ColorPicker liftingColor={setColor} />
      <List list={list} getList={getList} filter={filter} color={color} />
    </>
  );
}
