import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)
  
  let addValue=()=>{
   

  console.log('clicked',counter)
  setCounter(counter+1)
  }

  let removeValue=()=>{
    setCounter(counter-1)
  }
  return (
    <>
     <h1>This is first project</h1>
     <h3>counter value: {counter}</h3>
     <button onClick={addValue}>Add Value:{counter}</button> <br /> <br />
     <button onClick={removeValue}>Remove value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
