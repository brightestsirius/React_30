import React, { useState, useEffect } from "react";
import { USER } from "../../mockData";
import { getRandomHexColor } from "../../utils";

export default function Lifecycle() {
  const [user, setUser] = useState(USER);
  const [color, setColor] = useState();
  const [isColoring, setIsColoring] = useState(false);

  console.log(`🔄 re-render`);

  const handleColoring = () => setIsColoring((prevState) => !prevState);

  useEffect(() => {
    console.log(`🟡 in componentDidUpdate for isColoring`, isColoring);
    let intId;
    if (isColoring) {
      intId = setInterval(() => {
        console.log(`in interval`);
        setColor(getRandomHexColor());
      }, 1000);
    }

    return () => {
      clearInterval(intId);
      console.log(`🔄🔴 re-render and componentWillUnmount for isColoring`);
    };
  }, [isColoring]);

  return Object.keys(USER).length ? (
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
      <button onClick={handleColoring}>Toggle coloring</button>
    </>
  ) : null;
}
