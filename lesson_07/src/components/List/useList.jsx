import React, { useReducer, useEffect } from "react";

import service from "../../services/mockapi";

import { reducer, initialArg } from "../../store/todos/reducer";
import {
  SET_LIST,
  SET_TODOS_FILTER,
  SET_FILETERED_LIST,
} from "../../store/todos/action";
import { actionCreator } from "../../store/store";

export default function useList() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const getList = async () => {
    try {
      const response = await service.get(`todos`);
      dispatch(actionCreator(SET_LIST, response));
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemDelete = async (id) => {
    try {
      await service.delete(`todos`, id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetFilter = (e) =>
    dispatch(actionCreator(SET_TODOS_FILTER, e.target.value));

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    dispatch(actionCreator(SET_FILETERED_LIST));
  }, [state.list, state.filter]);

  return { state, handleItemDelete, handleSetFilter };
}
