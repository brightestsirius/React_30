import React, { useState, useEffect } from "react";
import { getRandomHexColor } from "../../utils";

export default function List({ list: propsList = [] }) {
  console.log(`🔄 List rerender`);

  const [color, setColor] = useState();
  const [list, setList] = useState(structuredClone(propsList));
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    console.log(`🟢 in componentDidMount`);

    const removeIntlId = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);
    setIntervalId(removeIntlId);

    return () => {
      console.log(`🔴 in componentWillUnmount`);
      clearInterval(removeIntlId);
    };
  }, []);

  useEffect(() => {
    console.log(`🟡 in componentDidUpdate for list`, list);
    if (list.length <= 3) setColor(`crimson`);
    if (!list.length) clearInterval(intervalId);
  }, [list]);

  useEffect(() => {
    console.log(`🟡 in componentDidUpdate for color`, color);
  }, [color]);

  const handleSetColor = () => {
    setColor(getRandomHexColor());
  };

  return list.length ? (
    <>
      <ul style={{ color }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={handleSetColor}>Set color</button>
    </>
  ) : null;
}
