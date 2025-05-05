import React, { useState, useEffect, useCallback, useMemo } from "react";
import "./style.sass";

import service from "../../services/mockapi";

import Form from "./Form";
import Statistics from "./Statistics";
import Filter from "./Filter";
import ColorPicker from "./ColorPicker";
import List from "./List";

// memo – HOC
// useCallback
// useMemo

export default function CRUD() {
  console.log(`🔄 in CRUD`);

  const [list, setList] = useState([]);
  const [filter, setFilter] = useState();
  const [color, setColor] = useState();

  const getList = useCallback(async () => {
    try {
      console.log(`in getList color`, color);
      const response = await service.get(`todos?color=${color}`);
      setList(response);
    } catch (err) {
      console.log(err);
    }
  }, [color]);

  const borderStyle = useMemo(() => {
    return {
      border: `3px dashed black`,
      borderColor: `${color}`,
      padding: `5px`,
      margin: `5px 0`
    }
  }, [color]);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Form getList={getList} />
      <Statistics list={list} borderStyle={borderStyle} />
      <Filter liftingFilter={setFilter} />
      <ColorPicker liftingColor={setColor} />
      <List list={list} getList={getList} filter={filter} color={color} />
    </>
  );
}
