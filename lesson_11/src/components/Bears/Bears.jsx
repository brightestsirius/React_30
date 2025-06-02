import React from "react";
import { useBearsStore } from "./../../store/features/bears";

export default function Bears() {
  const bears = useBearsStore((state) => state.bears);
  const { increasePopulation, removeAllBears, updateBears } = useBearsStore();

  return (
    <div>
      <span>Bears: {bears}</span>{" "}
      <button onClick={increasePopulation}>increasePopulation</button>{" "}
      <button onClick={removeAllBears}>removeAllBears</button>{" "}
      <input type="text" onBlur={(e) => updateBears(+e.target.value)} />
    </div>
  );
}
