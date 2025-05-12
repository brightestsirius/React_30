import { COUNTER_INC, COUNTER_DEC, COUNTER_SET } from "./actions";

const initialState = {
  counter: 0,
  color: `red`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case COUNTER_INC:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_DEC:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_SET:
      return { ...state, counter: state.counter + payload };
    default:
      return state;
  }
};

export { reducer, initialState };
