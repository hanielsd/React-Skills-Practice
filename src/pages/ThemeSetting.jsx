import { createContext, useContext, useState } from 'react'
import AuthWrapper from '../components/auth/AuthWrapper'
import CounterReducer from '../components/reducer/CounterReducer'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function KemponentByTheme() {
  const { theme } = useContext(ThemeContext)

  return <div>Your theme is: {theme}</div>
}
function ThemeToggler() {
  const { setTheme } = useContext(ThemeContext)

  const handleToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div
      className="bg-green-500 text-white cursor-pointer hover:opacity-80 active:opacity-100 px-2 inline-block rounded"
      onClick={handleToggle}
    >
      toggle theme
    </div>
  )
}
export default function ThemeSetting() {
  return (
    <ThemeProvider>
      <div>
        <div>Your theme setting</div>
        <KemponentByTheme />
        <ThemeToggler />
      </div>
      <AuthWrapper />
      <CounterReducer />
    </ThemeProvider>
  )
}
