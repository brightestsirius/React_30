import React, { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";

export default function Auth() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleAuth = () => setIsAuth((prevState) => !prevState);

  return (
    <button onClick={handleAuth}>{isAuth ? `🟢 Log in` : `🔴 Log out`}</button>
  );
}
