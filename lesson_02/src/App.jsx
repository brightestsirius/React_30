import React, { useState } from "react";
import List from "./components/List/List";

import { ANIMALS } from "./mockData";

export default function App() {
  const [showList, setShowList] = useState(true);
  const handleShowList = () => setShowList(!showList);
  return (
    <>
      <button onClick={handleShowList}>Remove List Component</button>
      {showList && <List list={ANIMALS} />}
    </>
  );
}
