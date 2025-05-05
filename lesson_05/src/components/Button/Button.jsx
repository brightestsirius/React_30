import React, {memo} from "react";

export default memo(function Button({ title = ``, handleClick }) {
  return <button onClick={handleClick}>{title}</button>;
})