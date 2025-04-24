import React, { useState, useEffect } from "react";
import { getRandomHexColor } from "../../utils";

export default function List({ list: propsList = [] }) {
  console.log(`🔄 List render`);

  const [color, setColor] = useState();
  const [list, setList] = useState(structuredClone(propsList));
  const [intId, setIntId] = useState();

  useEffect(() => {
    console.log(`🟢 in componentDidMount`);

    // setTimeout(() => {
    //   setList([...list, `OLEG`]);
    // }, 1000);

    const removeIntId = setInterval(() => {
      console.log(`in interval`);
      setList((prevState) => prevState.slice(0, -1));
    }, 1000);
    setIntId(removeIntId);

    return () => {
      console.log(`🔴 in componentWillUnmount`);
      clearInterval(removeIntId);
    };
  }, []);

  useEffect(() => {
    console.log(`🟡 in componentDidUpdate for list`, list);
    if (list.length <= 3) setColor(`crimson`);
    if (list.length === 0) clearInterval(intId);
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
