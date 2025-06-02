import React from "react";
import useBearsStore from "./../../store/features/bears";

export default function Bears() {
  const bears = useBearsStore((state) => state.bears);
  const increasePopulation = useBearsStore((state) => state.increasePopulation);
  const removeAllBears = useBearsStore((state) => state.removeAllBears);
  const updateBears = useBearsStore((state) => state.updateBears);

  return (
    <div>
      <p>Bears: {bears}</p>{" "}
      <button onClick={increasePopulation}>increasePopulation</button>{" "}
      <button onClick={removeAllBears}>removeAllBears</button>{" "}
      <input type="text" onBlur={(e) => updateBears(+e.target.value)} />
    </div>
  );
}
