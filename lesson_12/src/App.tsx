import React from 'react'

import Greeting from './components/Greeting/Greeting'
import Card from './components/Card/Card'
import Counter from './components/Counter/Counter'
import InputForm from './components/InputForm/InputForm'

import CounterRTK from './components/CounterRTK/CounterRTK'
import BearCounterZustand from './components/BearCounterZustand/BearCounterZustand'

import TodoList from './components/Todo/TodoList'

export default function App() {
  return (
    <div>
      {/* Використання interface або type для опису пропсів компонента. */}
      <Greeting name="Students" message="Welcome to the final lecture!" />
      <Greeting name="TypeScript" />

      <hr />

      {/* Типізація пропсів з children (якщо вони потрібні):
      Якщо компонент приймає children, його можна явно вказати в інтерфейсі пропсів: */}
      <Card title="My Awesome Card">
        <p>This is the content of the card.</p>
        <button>Click me!</button>
      </Card>

      <hr />

      {/* Типізація стану */}
      <Counter />

      <hr />

      {/* Типізація подій */}
      <InputForm />

      <hr />

      <CounterRTK />

      <hr />

      <BearCounterZustand />

      <hr />

      <TodoList />
    </div>
  )
}