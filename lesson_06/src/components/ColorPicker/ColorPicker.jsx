import React, { useContext } from "react";

import AppContext from "../../contexts/AppContext";

export default function ColorPicker() {
  const {
    color: { color, handleSetColor },
  } = useContext(AppContext);

  return (
    <p>
      ColorPicker:{" "}
      <input type="color" defaultValue={color} onChange={handleSetColor} />
    </p>
  );
}
