import { useState } from 'react'
import './App.css'
import Members from './components/members.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Members/>
    </>
  )
}

export default App
