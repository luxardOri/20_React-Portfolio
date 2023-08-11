import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import Nav from './components/Nav'
import data from "./components/data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav/>
{data.map(item=><h1>{item.title}</h1>)}
      <Routes>
        <Route path='/' element={<AboutMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </Router>
  )
}

export default App
