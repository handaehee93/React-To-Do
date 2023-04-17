import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  
  const handleSubmit = (e) => {
    // e.preventDefalut()를 넣어주면 submit이 되었을 때 페이지가 새로고침 되는 것을 방지 할 수 있다.
    e.preventDefault();
    // input에 아무것도 입력하지 않아도 추가되는 문제가 있어서 조건을 걸어 준 것, 단순히 text.length가 0이면 추가가 안되게 하면 아무것도 입력하지 않고 스페이스를 눌렀을 때 text.length가 0이 아니어서 여전히 문제가 발생 하여 아래와 같이 작성
    // trim은 앞 뒤 여백을 제거해 주는 역할을 함
    if (text.trim().length === 0) {
      return;
    }
    handleAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}