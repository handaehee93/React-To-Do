import React, { useEffect, useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({filter}) {
  // useState라는 것은 리액트에서 제공하는 리액트 훅이다. useState의 인자로 초기값을 전달할 수 있는데. useState의 중요한 특징은 값을 기억하고 있는 다는 것이다. 무슨 말이냐면 예를 들어 useState로 초기값으로 0을 전달했었고 현재 state의 값은 2라고 가정 해보자. 이 상태에서 컴포넌트가 변경이 되거나 Props가 변경이 되면 컴포넌트 전체가 다시 호출이 될 것이고, 그러면 컴포넌트 내부에 있는 useState의 초기값이 다시 전달이 될텐데 그러면 값이 2에서 다시 0이 되야 하는데 전달받은 초기값 0를 사용하지 않고 기존에 기억해둔 2를 사용한다. 따라서  여전히 state는 2일 것이다. useState는 이러한 특징이 있기 때문에 아래의 코드에서 컴포넌트가 다시 호출 되면 useState안에 함수가 호출이 될 것인데, 어차피 useState는 기존의 값을 그대로 사용을 할 것이므로 불필요한 호출이 발생하게 된다. 이걸 방지할려면 useState의 초기값으로 그냥 함수 호출을 넣어주는 것이 아니라, 콜백함수 형식으로 넣어 줘야 한다. useState의 초기값을 콜백함수 형식으로 전달하면 첫 렌더링 시에만 한 번 콜백을 실행해서 초기값을 만들고 그 이후에는 콜백함수를 실행하지 않기 때문이다.
  const [todos, setTodos] = useState(() => todosFromLocalStorage())

  const handleAdd = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleUpdate = (updated) =>{ 
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  }
  
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  // 로컬스토리에 저장된 값을 state 초기값으로 전달해주는 함수
  function todosFromLocalStorage () {
    const todos = localStorage.getItem('todos')
    return todos ? JSON.parse(todos) : []
  }
  // App.js에서 받아온 현재 filter정보를 받아와 해당 status가 받아온 filter와 일치하는 것들만 렌더링 하는 함수
  function getFilteredItems(todos, filter) {
      if (filter === 'all') {
        return todos;
      }
      return todos.filter((todo) => todo.status === filter);
    }

  // 로컬 스토리지의 오브젝트를 저장할려면 json으로 변환 해 줘야 한다.
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos) )
  },[todos])


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

              
            
