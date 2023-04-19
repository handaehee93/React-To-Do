import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../../context/DarkModeContext';
import {HiMoon, HiSun} from 'react-icons/hi'
export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index} >
            {/* 버튼은 기본적으로 filter라는 class이름을 가지지만, 만약 전달 받은 filter와 filters의 각 요소중 같은 것이 있다면 selected라는 class도 추가적으로 가질 수 있게 해준 것 */}
            <button 
            className={`${styles.filter} ${
                filter === value && styles.selected
              }`} onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
