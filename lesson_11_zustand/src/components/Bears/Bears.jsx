import React from "react";
import useBearsStore from "./../../store/features/bears";

export default function Bears() {
  const { bears, increasePopulation, removeAllBears, updateBears } =
    useBearsStore((state) => state);

  return (
    <div>
      Bears: {bears}{" "}
      <button onClick={increasePopulation}>increasePopulation</button>{" "}
      <button onClick={removeAllBears}>removeAllBears</button>{" "}
      <input type="text" onBlur={(e) => updateBears(+e.target.value)} />
    </div>
  );
}
