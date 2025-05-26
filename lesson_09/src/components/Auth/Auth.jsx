import React, { useContext } from "react";

import AuthContext from "../../contexts/AuthContext";

export default function Auth() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleSetAuth = () => setIsAuth((prevState) => !prevState);

  return (
    <button onClick={handleSetAuth}>
      {isAuth ? `Log in 🟢` : `Log out 🔴`}
    </button>
  );
}
