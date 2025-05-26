import React from "react";

import TodoDetails from "./../components/TodoDetails/TodoDetails";
import NavigationBtn from './../components/NavigationBtn/NavigationBtn'

export default function TodoRoute() {
  return (
    <div>
      <h2>TodoRoute</h2>
      <TodoDetails />
      <NavigationBtn title={`Back to all Todos`} path={`/todos`} />
      <NavigationBtn title={`Back`} />
    </div>
  );
}
