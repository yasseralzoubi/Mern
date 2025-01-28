import { useState } from 'react'
import './App.css'
import Login from './components/login.jsx'
import Map from './components/map.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React App</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
      <Login />
      <Map />
    </>
  )
}

export default App
