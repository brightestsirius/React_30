import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";

export default function AuthGuard({ children }) {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();

  if (isAuth) return children;
  else return <Navigate to={`/`} state={{ path: location }} replace />;
}
