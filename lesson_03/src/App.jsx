import React, { useState } from "react";
import Lifecycle from "./components/Lifecycle/Lifecycle";
import CRUD from "./components/CRUD/CRUD";

export default function App() {
  const [showLifecycle, setShowLifecycle] = useState(true);
  const handleLifecycle = () => setShowLifecycle((prevState) => !prevState);

  return (
    <>
      {/* <button onClick={handleLifecycle}>Toggle Lifecycle Component</button>
      {showLifecycle && <Lifecycle />} */}
      <CRUD />
    </>
  );
}
