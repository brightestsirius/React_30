import React, { useReducer, useEffect } from "react";

import service from "../../services/mockapi";
import { actionCreator } from "../../store/store";

import { reducer, initialState } from "../../store/todosSlice/reducer";
import {
  SET_LIST,
  SET_FILTER,
  SET_FILETERD_LIST,
} from "../../store/todosSlice/actions";

export default function useTodos() {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const handleSetFilter = (e) => {
    dispatch(actionCreator(SET_FILTER, e.target.value)); // {type: `SET_FILTER`, payload: e.target.value}
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    dispatch(actionCreator(SET_FILETERD_LIST));
  }, [state.list, state.filter]);

  return { state, handleItemDelete, handleSetFilter };
}
