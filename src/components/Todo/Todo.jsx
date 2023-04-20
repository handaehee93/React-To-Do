import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, handleUpdate, handleDelete }) {
  // 체크박스 이벤트 헨들러 함수
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    handleUpdate({ ...todo, status: status });
  };
  
  const onDelete = () => handleDelete(todo);
  
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={todo.id}
        //status가 completed면 체크가 되어 있도록 해준 것
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={todo.id} className={styles.text}>{todo.text}</label>
      <span className={styles.icon}>
        <button onClick={onDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
