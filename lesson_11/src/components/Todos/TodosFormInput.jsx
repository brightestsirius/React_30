import React from "react";

export default function TodosFormInput({
  type = "text",
  id,
  onChange,
  onBlur,
  value,
  ref,
}) {
  return (
    <input
      id={id}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
    />
  );
}
