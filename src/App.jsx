import React, { useEffect, useState } from 'react'

function App() {
// hooks, funciton, loops, if else, switch case, ternary operator, map, filter, reduce, find, findIndex, some, every

const [products, setproducts] = useState([])
const [count, setCount] = useState(0)
// useEffect syntax -> only allow you to return cleanup funciton, not a promise
useEffect(
  // effect callback function 
   ()=>{
 async   function GetData(){
  console.log("UseEffect start here");
const getalluser = await getalluser()
const signleUser = await getuserbyid(1)

}

return ()=>{
  console.log("UseEffect cleanup function");
}
}


, [count])

// if no dependency array is provided, the effect will run after every render.
// if empty array -> the effect will run only once after the initial render.
// if state variable is provided in the dependency array, the effect will run after the initial render and whenever that state variable changes.
  return (
    // only jsx code is allowed here, no js code is allowed here
    <div>

    <button onClick={() => setCount(count + 1)}>Increment</button>
    <p>Count: {count}</p>
          {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}

    </div>
  )
}

export default App


// useEffect is a React Hook that lets you synchronize a component with an external system and run side effects after rendering. It accepts a setup function and an optional dependency array: useEffect(setup, dependencies?).

// How It Works

// • Runs after render: Code inside useEffect executes after React updates the DOM, not during rendering.
// • Dependency array controls re-runs:
// 	• No array: Runs after every render.
// 	• Empty array ([]): Runs once when the component mounts.
// 	• Array with values ([a, b]): Runs on mount and whenever a or b changes.


// • Cleanup function: Returning a function from useEffect cleans up resources (like timers or subscriptions) before the effect re-runs or the component unmounts.














// import React, { useEffect, useState } from 'react'

// function App() {
//     const [count, setCount] = useState(0)
//     console.log('App rendered')
//     const [products, setprdocuts] = useState([])
//     // backend data fetching is asynchronous
//     // api call
//     // fetch('https://fakestoreapi.noksha.dev/api/products')
//     //     .then(res => res.json())
//     //     .then(json => {

//     //         console.log(json)
//     //         setprdocuts(json.data)
//     //     })

//     const funct = () => {
//         fetch('https://fakestoreapi.noksha.dev/api/products')
//             .then(res => res.json())
//             .then(json => {

//                 console.log(json)
//                 setprdocuts(json.data)
//             })
//     }
//     // funct()

//     // useEffect(() => {
//     //   first

//     //   return () => {
//     //     second
//     //   }
//     // }, [third])

//     useEffect(() => {
//         console.log("UseEffect start here");
        
//         fetch('https://fakestoreapi.noksha.dev/api/products')
//             .then(res => res.json())
//             .then(json => {

//                 console.log(json)
//                 setprdocuts(json.data)
//             })
//     }, []) // 2 parameter -> effect callback, dependency array

// console.log("THIS IS AFTER USEEFFECT");



//     return (
//         <div>
//             <button onClick={funct}>Get data</button>
//             <h1>This is React App</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <p>Count: {count}</p>
//             {products.map((product) => (
//                 <div key={product.id}>
//                     <h2>{product.title}</h2>
//                     <p>{product.description}</p>
//                     <p>${product.price.toFixed(2)}</p>
//                 </div>
//             ))}
//         </div >
//     )
// }

// export default App