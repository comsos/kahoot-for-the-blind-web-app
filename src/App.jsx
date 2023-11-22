import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import bg from './assets/bg.png'

function App() {
  const [text, setText] = useState('')

  const handleChange = event => {
    setText(event.target.value)
  }

  const handleClick = event => {
    event.preventDefault();
    text === "1234" ? alert("Correct") : alert("lobby does not exist")

  }

  return (
    <>
      <div className="h-screen w-screen object-cover">
        <img src={bg} className="w-full h-full -z-50 absolute" alt="React logo" />
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-6xl pb-4">Sound it Out</h1>
          <div className="bg-white flex items-center justify-center h-40 w-72 rounded-lg flex-col">
            <input type="text" onChange={handleChange} placeholder='Game Pin' className='h-12 w-[16rem] bg-gray-200 border-gray-700 text-center rounded-lg'/>
            <button onClick={handleClick} className='bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12'>
              Enter
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
