import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello world</h1>
      <h3>Auto deployment is working great!!!!</h3>
    </div>
  )
}

export default App
