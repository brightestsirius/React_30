import React, { useState, useEffect } from "react";
import { getRandomHexColor } from "./../../utils";

// useEffect

// Component Lifecycle:
// 🟢 componentDidMount – one-time operations: setTimeout, setInterval, fetch
//    useEffect( ()=>{}, [] )

// 🟡 componentDidUpdate
//    useEffect( ()={}, [value1, value2] );

// 🔴 componentWillUnmount

// useState
// setList( (currentValue) => currentValue.slice(0, -1) )
// setColor('red');

export default function List({ list: propsList = [] }) {
  const [color, setColor] = useState(`green`);
  const [list, setList] = useState(structuredClone(propsList));
  const [email, setEmail] = useState(`taras@gmail.com`);
  const [intId, setIntId] = useState();

  console.log(`🔄 List rerender`);

  useEffect(() => {
    console.log(`in 🟢 componentDidMount`);

    const removeIntId = setInterval(() => {
      setList(prevState => prevState.slice(0, -1)); // [7] ... [6]
    }, 1000);

    setIntId(removeIntId);
  }, [])

  useEffect(() => {
    console.log(`🟡 componentDidUpdate list`, list);
    if(!list.length) clearInterval(intId);
  }, [list])

  useEffect(() => {
    console.log(`🟡 componentDidUpdate color`, color);
  }, [color]);

  useEffect(() => {
    console.log(`🟡 componentDidUpdate Send email to ${email}`);

    return () => {
      console.log(`🟡🔴 componentWillUpdate – Stop sending email to ${email}`);
    }
  }, [email])

  const handleSetColor = () => {
    setColor(getRandomHexColor());
  };

  const handleAddItem = () => {
    const item = prompt(`Enter new item`);
    setList(prevState => [...prevState, item]);
  }

  const handleSendEmail = () => {
    const newEmail = prompt(`Enter new email`);
    setEmail(newEmail);
  }

  return list.length ? (
    <>
      <ul style={{ color }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>email: {email}</p>

      <button onClick={handleSetColor}>Set color</button>
      <button onClick={handleAddItem}>Add item to list</button>
      <button onClick={handleSendEmail}>Change email</button>
    </>
  ) : null;
}
