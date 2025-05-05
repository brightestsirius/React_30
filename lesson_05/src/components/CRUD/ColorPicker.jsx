import React, { useEffect, memo } from "react";
import { TODOS_DEFAULT_COLOR } from "../../constants/todos";

import useLocalStorage from "./../../hooks/useLocalStorage";

export default memo(function ColorPicker({ liftingColor }) {
  console.log(`🔄 in ColorPicker`);

  const [color, setColor] = useLocalStorage(`color`, TODOS_DEFAULT_COLOR);

  const handleSetColor = (e) => setColor(e.target.value);

  useEffect(() => {
    liftingColor(color);
  }, [color]);

  return (
    <p>
      ColorPicker:{" "}
      <input type="color" defaultValue={color} onChange={handleSetColor} />
    </p>
  );
});