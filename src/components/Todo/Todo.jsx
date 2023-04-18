import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Todo({ todo, handleUpdate, handleDelete }) {
  // 체크박스 이벤트 헨들러 함수
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    handleUpdate({ ...todo, status: status });
  };
  
  const onDelete = () => handleDelete(todo);
  
  return (
    <li>
      <input
        type='checkbox'
        id='checkbox'
        //status가 completed면 체크가 되어 있도록 해준 것
        checked={todo.status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox'>{todo.text}</label>
      <span>
        <button onClick={onDelete}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}