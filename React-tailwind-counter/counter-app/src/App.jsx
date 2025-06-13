import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0); 
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  }
  
  return (
    <>

    <h1 className='px-28 my-2.5'> Count : {count}</h1>
    <br/>
    <button className='bg-green-600 rounded text-white cursor-pointer w-20 h-6 m-2.5 ' onClick={increment}>increment</button>
     <button className='bg-red-600 rounded text-white cursor-pointer w-20 h-6 m-2.5 ' onClick={decrement}>decrement</button>
      <button className='bg-blue-600 rounded text-white cursor-pointer w-20 h-6 m-2.5 ' onClick={reset}>reset</button>
    </>
  )
}

export default App
