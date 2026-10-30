import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'

function App() {

  // let counter = 0
  const [counter, setCounter] = useState(0)
  return (
    <>
      <Heading />
      <section id="">
        <h1>This is my First React Project</h1>

        counter: {counter}

        <button onClick={() => {
          // counter++

          setCounter(counter + 1)
          console.log(counter);

        }}>
          Increment
        </button>
      </section>


    </>
  )
} // functional component -> App

export default App
