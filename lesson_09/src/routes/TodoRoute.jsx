import React from "react";

import TodoItem from './../components/TodoItem/TodoItem'
import NavigateBtn from './../components/NavigateBtn/NavigateBtn'

export default function TodoRoute() {
  return (
    <div>
      <h2>TodoRoute</h2>

      <TodoItem />

      <NavigateBtn title={`Back to Todos`} path={`/todos`} />
      <NavigateBtn title={`Back to Dashboard`} path={`/dashboard`} />
    </div>
  );
}
