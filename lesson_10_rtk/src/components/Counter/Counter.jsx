import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../../store/features/counter/counterSlice";

export default function Counter() {
  const { value, color } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div style={{ color }}>
      <button onClick={() => dispatch(decrement())}>-</button>{" "}
      <span>{value}</span>{" "}
      <button onClick={() => dispatch(increment())}>+</button>{" "}
      <input
        type="number"
        onBlur={(e) => dispatch(incrementByAmount(+e.target.value))}
      />
    </div>
  );
}
