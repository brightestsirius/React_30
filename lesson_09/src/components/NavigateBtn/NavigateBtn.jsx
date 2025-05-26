import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavigateBtn({ title, path }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(path);

  return <button onClick={handleNavigate}>{title}</button>;
}
