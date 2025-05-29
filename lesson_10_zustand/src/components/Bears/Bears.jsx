import React from "react";
import useBearsStore from "../../store/bears";

export default function Bears() {
  const bears = useBearsStore((store) => store.bears);
  const increasePopulation = useBearsStore((store) => store.increasePopulation);
  const updateBears = useBearsStore((store) => store.updateBears);

  return (
    <div>
      Bears: {bears}{" "}
      <button onClick={increasePopulation}>increasePopulation</button>
      <input type="number" onBlur={(e) => updateBears(+e.target.value)} />
    </div>
  );
}
