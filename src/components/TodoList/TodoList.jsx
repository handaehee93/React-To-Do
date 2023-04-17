import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '1', text: '자바스크립트 공부하기', status: 'active'},
    {id: '2', text: '타입스크립트 공부하기', status: 'active'}
  ])

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <section>
      <AddTodo handleAdd={handleAdd}/>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}
