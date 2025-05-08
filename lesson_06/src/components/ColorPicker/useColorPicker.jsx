import React, { useState } from "react";

export default function useColorPicker() {
  const [color, setColor] = useState(`#673AB7`);

  const handleSetColor = (e) => setColor(e.target.value);

  return { color, handleSetColor };
}
