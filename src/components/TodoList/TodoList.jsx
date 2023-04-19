import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
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
  
  // App.js에서 받아온 현재 filter정보를 받아와 해당 status가 받아온 filter와 일치하는 것들만 렌더링 하는 함수
  function getFilteredItems(todos, filter) {
      if (filter === 'all') {
        return todos;
      }
      return todos.filter((todo) => todo.status === filter);
    }
  // map을 통해 나열하기 위해 함수를 호출하고 값을 변수에 담은 것
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              handleUpdate={handleUpdate} 
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      <AddTodo handleAdd={handleAdd}/>
      </section>
    );
  }

              
            
