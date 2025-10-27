import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Embed Relevance Agent</h1>
        <p>A web app to showcase embedded Relevance AI agent capabilities</p>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            This is a basic React starter. Ready to integrate Relevance AI SDK!
          </p>
        </div>
      </header>
    </div>
  )
}

export default App
