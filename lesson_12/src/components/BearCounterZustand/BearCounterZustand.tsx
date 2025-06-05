import React from "react";

import useBearStore from "../../store/features/useBearStore";

const BearCounterZustand = () => {
  const bears = useBearStore((state) => state.bears);
  const addBear = useBearStore((state) => state.addBear);
  const removeBear = useBearStore((state) => state.removeBear);

  return (
    <div>
      <p>Zustand Bears: {bears}</p>
      <button onClick={addBear}>Add Bear</button>
      <button onClick={removeBear}>Remove Bear</button>
    </div>
  );
};

export default BearCounterZustand;
