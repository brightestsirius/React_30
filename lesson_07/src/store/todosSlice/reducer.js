import { SET_LIST, SET_FILTER, SET_FILETERD_LIST } from "./actions";
import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./constants";

const initialState = {
  list: [],
  filteredList: [],
  filter: TODOS_FILTER_ALL,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LIST:
      return { ...state, list: payload };
    case SET_FILTER:
      return { ...state, filter: payload };
    case SET_FILETERD_LIST:
      return {
        ...state,
        filteredList: state.list.filter((item) => {
          switch (state.filter) {
            case TODOS_FILTER_ALL:
              return item;
            case TODOS_FILTER_COMPLETED:
              return item.completed;
            case TODOS_FILTER_PROGRESS:
              return !item.completed;
          }
        }),
      };
    default:
      return state;
  }
};

export { reducer, initialState };
