import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

import { Navigate, useLocation } from "react-router-dom";

export default function AuthGuard({ children }) {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuth) return <Navigate to={`/`} state={{ from: location }} replace />;
  else return children;
}
