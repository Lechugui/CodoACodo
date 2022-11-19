import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Peliculas from './Peliculas/pages/Peliculas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Peliculas/>
  )
}

export default App
