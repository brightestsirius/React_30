import React from "react";
import {useLoaderData} from 'react-router-dom'

export default function UserRoute() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2>UserRoute</h2>
    </div>
  );
}
