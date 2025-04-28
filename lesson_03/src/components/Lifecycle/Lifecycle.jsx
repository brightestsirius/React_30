import React, { useState, useEffect } from "react";
import { USER } from "./../../mockData";
import { getRandomHexColor } from "../../utils";

// 🔄🟢🟡🔴💌

export default function Lifecycle() {
  const [user, setUser] = useState(USER);
  const [color, setColor] = useState();

  const [isColoring, setIsColoring] = useState(false);

  const handleStartColoring = () => {
    setIsColoring((prevState) => !prevState);
  };

  useEffect(() => {
    let intId;
    if (isColoring) {
      intId = setInterval(() => {
        console.log(`in interval`);
        setColor(getRandomHexColor());
      }, 1000);
    }

    return () => {
      clearInterval(intId);
    };
  }, [isColoring]);

  useEffect(() => {
    console.log(
      `💌 in componentDidUpdate WebSocket START for user.email`,
      user.email
    );

    return () => {
      console.log(
        `🔴💌 componentWillUnmount – WebSocket CLOSE for user.email`,
        user.email
      );
    };
  }, [user.email]);

  return Object.keys(user).length ? (
    <>
      <ul style={{ color }}>
        {Object.entries(user)
          .filter(([key]) => key !== `id`)
          .map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
      </ul>
      <button onClick={handleStartColoring}>Toggle coloring</button>
    </>
  ) : null;
}
