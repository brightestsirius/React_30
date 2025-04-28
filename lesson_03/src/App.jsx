import React, { useState } from "react";
import Lifecycle from "./components/Lifecycle/Lifecycle";

export default function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);

  const handleShowLifecycle = () => setShowLifecycle((prevState) => !prevState);

  return (
    <>
      <button onClick={handleShowLifecycle}>Toggle Lifecycle component</button>
      {showLifecycle && <Lifecycle />}
    </>
  );
}
