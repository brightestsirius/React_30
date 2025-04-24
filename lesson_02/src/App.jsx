import React, { useState } from "react";
import List from "./components/List/List";

import { animals } from "./mockData";

export default function App() {
  const [showList, setShowList] = useState(true);

  const handleListRemove = () => setShowList(!showList);

  return (
    <>
      <button onClick={handleListRemove}>Remove List Component</button>
      {showList && <List list={animals} />}
    </>
  );
}
