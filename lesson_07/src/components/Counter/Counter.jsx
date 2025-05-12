import React, { useReducer } from "react";

import { reducer, initialArg } from "../../store/counter/reducer";
import { actionCreator } from "../../store/store";
import {
  COUNTER_INC,
  COUNTER_DEC,
  COUNTER_SET,
} from "../../store/counter/action";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialArg);

  const handleInc = () => dispatch(actionCreator(COUNTER_INC));

  const handleDec = () => dispatch(actionCreator(COUNTER_DEC));

  const handleSetValue = () => {
    const value = +prompt(`Enter value`, 10);
    dispatch(actionCreator(COUNTER_SET, value));
  };

  return (
    <div>
      <button onClick={handleInc}>+</button> <span>{state.counter}</span>{" "}
      <button onClick={handleDec}>-</button>{" "}
      <button onClick={handleSetValue}>Add default value</button>
    </div>
  );
}
