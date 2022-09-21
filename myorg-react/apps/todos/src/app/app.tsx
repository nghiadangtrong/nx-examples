// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState, useEffect } from 'react';
import { Todo } from '@myorg-react/data';
import { Todos } from '@myorg-react/ui';

export function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    fetch('/api/todos')
      .then(_ => _.json())
      .then(setTodos)
  }, [])

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: ''
    })
      .then(_ => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo])
      })
  }

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button id="add-todo" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
