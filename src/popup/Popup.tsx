import { useState } from 'react'
import './Popup.css'

function App() {
  const [crx, setCrx] = useState('create-chrome-ext')

  return (
    <main>
      <h3>Popup Page!</h3>

      <h6 className="bg-yellow-400">v 0.0.0</h6>

      <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
        Power by {crx}
      </a>
    </main>
  )
}

export default App
