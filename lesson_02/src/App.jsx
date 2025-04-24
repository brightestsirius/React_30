import React from "react";
import List from "./components/List/List";

import { ANIMALS } from "./mockData";

export default function App() {
  return (
    <>
      <List list={ANIMALS} />
    </>
  );
}
