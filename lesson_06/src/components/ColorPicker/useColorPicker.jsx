import React from "react";

import useLocalStorage from "../../hooks/useLocalStorage";

export default function useColorPicker() {
  const [color, setColor] = useLocalStorage(`color`, `#673AB7`);

  const handleSetColor = (e) => setColor(e.target.value);

  return { color, handleSetColor };
}
