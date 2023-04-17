import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '1', text: '자바스크립트 공부하기', status: 'active'},
    {id: '2', text: '타입스크립트 공부하기', status: 'active'}
  ])

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleUpdate = (updated) =>{ 
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  }
  
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  return (
    <section>
      <AddTodo handleAdd={handleAdd}/>
      <ul>
        {todos.map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              handleUpdate={handleUpdate} 
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </section>
    );
  }
              
            
