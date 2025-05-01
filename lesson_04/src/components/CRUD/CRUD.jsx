import React, { useState, useEffect } from "react";
import "./style.sass";

import service from "../../services/mockapi";

import Form from "./Form";
import Statistics from "./Statistics";
import List from "./List";

export default function CRUD() {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const response = await service.get(`todos`);
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Form getList={getList} />
      <Statistics list={list} />
      <List list={list} getList={getList} />
    </>
  );
}
