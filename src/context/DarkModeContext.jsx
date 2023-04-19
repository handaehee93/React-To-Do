import { createContext, useContext, useEffect, useState } from 'react'

// 1. createContext로 context를 만들고
const DarkModeContext = createContext()

// 3. provider를 export하기 위해 함수로 만들어 준다.
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
    updateDarkMode(!darkMode)
  }
  // DarkModeProvider는 앱이 실행이 될때 처음 실행이 되므로, useEffect을 통해 어플리케이션이 실행이 될 때 현재 dark모드인지 아닌지 확인 한 다음에 초기값을 설정 해 준다.
  useEffect(() => {
    // localStorage의 theme가 dark이거나, 브라우저 자체가 다크모드인지 아닌지 확인 한 다음에 다크모드 인지 아닌지 isDark에 저장을 하고 그러면 isDark에는 true나 false가 할당이 되어 있을 것이고
    const isDark = 
    (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
    // 현재 상태를 isDark로 업데이트 해주고 
    setDarkMode(isDark)
    // 업데이트 토글 버튼에도 isDark의 현재 상태를 업데이트 한다.
    updateDarkMode(isDark)
  }, [])
  
  return (
    // 2. context에서 제공하는 provider로 children을 감싸주고
  <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
    {children}
  </DarkModeContext.Provider>
)
}



function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}


export const useDarkMode = () => useContext(DarkModeContext)