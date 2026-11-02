import React from 'react'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <div>

      <h1>This is App.JSX</h1>

      <ProductPage />

    </div>
  )
}

export default App




// import { useState } from 'react'
// import './App.css'
// import Heading from '../components/Heading'
// // import Heading from "./components/Heading.jsx"
// // import Count from "./Count.jsx"


// function App() {

//   // let counter = 0
//   const [counter, setCounter] = useState(0)
//   const heading = "This is heading"

//   return (
//     <>
//       {/* JSX fragment  */}

//       {/* HeadingCOmponent */}

//       {/* HEROSECTION */}
//       {/* <h1>This is heading </h1> */}
//       <Heading />

//       {/* <Count /> */}
//       {/* <Heading></Heading> */}
//       <section id="">
//         <h1>This is my First React Project</h1>

//         counter: {counter}

//         <button onClick={() => {
//           // counter++

//           setCounter(counter + 1)
//           console.log(counter);

//         }}>
//           Increment
//         </button>
//       </section>

//       <footer>
//         this is footer
//       </footer>

//     </>

//   )
// } // functional component -> App

// export default App


// // function Counter(count) {
// //   count = count + 1
// //   return count
// //   return newCount
// // }



// // JS function -> only return single value
// // function Counter(count) {
// //   count = count + 1
// //   const newCount = count + 3
// //   return count, newCount
// // }