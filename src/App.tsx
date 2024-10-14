import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="relative w-full max-w-md p-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg overflow-hidden">
      {/* Icon Button */}
      <div className="absolute top-4 right-4 p-2 bg-white/30 rounded-full text-white cursor-pointer hover:bg-white/40 transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L21 10.5m0 0L17.25 14.25M21 10.5H3"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="text-white">
        <p className="text-xl font-medium">Overall Revenue</p>
        <p className="mt-3 text-5xl font-bold">$25,912</p>
        <div className="flex items-center space-x-2 mt-4">
          <div className="flex items-center justify-center px-2 py-1 bg-blue-200 rounded-lg text-sm font-medium text-blue-900">
            +1.9%
          </div>
          <p className="text-blue-100 text-sm">Than last month</p>
        </div>
      </div>

      {/* Wavy Pattern */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255, 255, 255, 0.3)"
            fillOpacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,112C480,107,600,149,720,170.7C840,192,960,192,1080,192C1200,192,1320,192,1380,192L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
