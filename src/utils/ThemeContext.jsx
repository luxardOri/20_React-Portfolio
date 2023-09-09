import { useState,createContext,useContext } from 'react'

export const ThemeContext = createContext()

// this is optional
export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider(props) {
    const [ theme, setTheme ] = useState('dark')
    return (<ThemeContext.Provider value={{ theme,setTheme }} {...props}/>)
}