import React, { useReducer } from "react";

import { reducer, initialState } from "./../../store/counterSlice/reducer";
import {
  COUNTER_DEC,
  COUNTER_INC,
  COUNTER_SET,
} from "../../store/counterSlice/actions";
import { actionCreator } from "./../../store/store";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCouterDec = () => {
    dispatch(actionCreator(COUNTER_DEC)); // {type: "COUNTER_DEC", payload: undefined}
  };

  const handleCouterInc = () => dispatch(actionCreator(COUNTER_INC)); // {type: "COUNTER_INC", payload: undefined}

  const handleSetCounter = () => {
    const value = +prompt(`Enter value`, 10);
    dispatch(actionCreator(COUNTER_SET, value)); // {type: "COUNTER_SET", payload: value}
  };

  return (
    <div>
      <button onClick={handleCouterDec}>-</button>{" "}
      <span style={{ color: state.color }}>{state.counter}</span>{" "}
      <button onClick={handleCouterInc}>+</button>{" "}
      <button onClick={handleSetCounter}>Add value</button>
    </div>
  );
}
