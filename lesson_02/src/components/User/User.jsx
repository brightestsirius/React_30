import React, { useState, useEffect } from "react";

export default function User({ user: propsUser = {} }) {
  const [user, setUser] = useState(propsUser);

  useEffect(() => {
    console.log(`🟢 Send email to:`, user.email);

    return () => {
        console.log(`🔴 Stop sending email to:`, user.email);
    }
  }, [user.email]);

  const handleChangeEmail = () => {
    const email = prompt(`Enter email`, `sheva@gmail.com`);
    setUser((prevState) => ({ ...prevState, email }));
  };

  return Object.keys(user).length ? (
    <>
      <ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <button onClick={handleChangeEmail}>Change email</button>
    </>
  ) : null;
}
