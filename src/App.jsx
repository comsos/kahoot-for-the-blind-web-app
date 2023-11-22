import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import bg from './assets/bg.png'
import './styles.css';

function App() {

  return (
    <>
      <div className="h-screen w-screen object-cover">
        <img src={bg} className="w-full h-full -z-50 absolute" alt="React logo" />
        <div className="h-screen flex items-center justify-center flex-col">
          <h1 className='kahoot text-white h-24 text-6xl font-bold'>Sound it Out</h1>
          <div className="bg-white flex items-center justify-center h-40 w-72 rounded-lg flex-col">
            <input type="text" placeholder='Game Pin' className='h-12 w-[16rem] bg-gray-200 border-gray-700 text-center rounded-lg'/>
            <button className='bg-black rounded-lg hover:bg-gray-900 hover:display-none text-white mt-2 w-[16rem] h-12'>Enter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
