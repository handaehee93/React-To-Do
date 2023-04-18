import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
// 헤더에 있는 all, active, completed 버튼 클릭시 TodoList에서 보여주는 Todo가 달라지므로 Header와 TodoList가 같은 state를 공유할 수 있도록 App컴포넌트에 filter state를 만들어 준 것
const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  
  const filterChangeHandler = (filter) => {
    setFilter(filter)
  }
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={filterChangeHandler} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
