import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigationBtn({ title, path }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path) navigate(path);
    else navigate(-1);
  };

  return <button onClick={handleNavigate}>{title}</button>;
}
