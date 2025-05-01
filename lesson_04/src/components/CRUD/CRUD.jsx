import React, { useState } from "react";
import "./style.sass";

import Form from "./Form/Form";
import Statistics from "./Statistics/Statistics";
import Filter from "./Filter/Filter";
import List from "./List/List";

import service from "../../services/todos";

export default function CRUD() {
  const [list, setList] = useState([]);
  const [filter, setFilter] = useState();

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form getList={getList} />
      <Statistics list={list} />
      <Filter liftingFilter={setFilter} />
      <List list={list} getList={getList} filter={filter} />
    </>
  );
}
