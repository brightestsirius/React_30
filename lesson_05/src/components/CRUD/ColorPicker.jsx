import React, { useState, useEffect, memo } from "react";

export default memo(function ColorPicker({ liftingColor }) {
  console.log(`🔄 in ColorPicker`);
  
  const [color, setColor] = useState(`#673ab7`);

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