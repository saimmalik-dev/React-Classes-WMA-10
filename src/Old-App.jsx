import React, { useState } from 'react'
import Input from './components/Input';

function App() {

// 1. input state
// 2. handleChange function
// 3. handleSubmit function
// 4. validation -> error handling


  const [name, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value) // async function
    console.log("name", name);// console will execute before the state is updated
  }

  const [email, setEmail] = useState("")
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    console.log("email", email);
  }

  const [gender, setGender] = useState("")
  const handleChangeGender = (e) => {
    setGender(e.target.value)
    console.log("gender", gender);
  }
  // const [gender, setgender] = useState(second)

  const [course, setCourse] = useState([])
  const handleChangeCourse = (e) => {
    setCourse([...course, e.target.value])
    // setCourse((previousState) => [...previousState, e.target.value])
    console.log("course", course);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("---- Form is submitted --- ");

    console.log("name", name);
    console.log("email", email);
    if (gender == "") {
      alert("select gender")
      return
    }
    if (course.length == 0) {
      alert("Select your course")
      return
    }
  }

  return (
    <>
      <h1>This is App.JSX</h1>
      <form action="" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="">Name</label>
          <Input
            value={name}
            onChange={handleChange}
          />

        </ div>

        <div>
          <label htmlFor="">Email</label>
            <Input
            type='email'
            placeholder="Enter your email"
            value={email}
            onChange={handleChangeEmail}
          />
          {/* <input type="email" placeholder='Enter Your Name'
            value={email}
            onChange={handleChangeEmail}
            style={{
              border: "2px solid red",
              height: "20px"
            }}
          /> */}
        </div>

        <div>
          <label htmlFor="">Password</label>
          <input type="password" placeholder='Enter Your Name' />
        </div>


        <div>
          <label htmlFor="">Gender</label> <br />
          <label htmlFor="male">Male</label>
          <input type="radio" name='gender' id='male' value={"male"} onChange={handleChangeGender} />
          <label htmlFor="female">Female</label>
          <input type="radio" name='gender' id='female' value={"female"} onChange={handleChangeGender} />
        </div>


        <div>
          <label htmlFor="">Courses</label> <br />
          <label htmlFor="">Maths</label>
          <input type="checkbox" name='course' value={"maths"} onChange={handleChangeCourse} />
          <label htmlFor="">Eng</label>
          <input type="checkbox" name='course' value={"eng"} onChange={handleChangeCourse} />
          <label htmlFor="">Phy</label>
          <input type="checkbox" name='course' value={"phy"} onChange={handleChangeCourse} />
          <label htmlFor="">CS</label>
          <input type="checkbox" name='course' value={"cs"} onChange={handleChangeCourse} />
        </div>

        <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default App


// import React, { useState } from 'react'
// import ProductPage from './pages/ProductPage'
// import Button from './components/Button';


// function App() {

//   // const [state, setState] = useState(initialState) // first variable is state variable, second variable is function to update the state variable, initialState is the initial value of the state variable


//   // let index = 0
//   const [index, setIndex] = useState(0)

//   const handleClick = () => {
//     console.log("Button is clicked");
//     setIndex(index + 1)
//     console.log("index", index);
//   }



//   return (
//     <div>

//       <h1 style={{ color: "blue" }}>This is App.JSX</h1>
//       <h1>Index: {index}</h1>
//       <Button ClickFunction={handleClick} btnText="App.js KA button" />
//       {/* <button></button> */}
//       {/* <button onClick={handleClick}>Click Me</button> */}

//       <ProductPage />

//     </div>
//   )
// }

// export default App



// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     // 1. Initialize local state
//     this.state = {
//       count: 0
//     };
//   }

//   // 2. Lifecycle method (runs after component mounts to the DOM)
//   componentDidMount() {
//     console.log('Counter mounted');
//   }

//   // 3. Custom event handler (arrow function auto-binds `this`)
//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   // 4. Required method to return UI
//   render() {
//     return (
//       <div>
//         <h2>{this.props.title}</h2>
//         <p>Current count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// // export default Counter;




// // import { useState } from 'react'
// // import './App.css'
// // import Heading from '../components/Heading'
// // // import Heading from "./components/Heading.jsx"
// // // import Count from "./Count.jsx"


// // function App() {

// //   // let counter = 0
// //   const [counter, setCounter] = useState(0)
// //   const heading = "This is heading"

// //   return (
// //     <>
// //       {/* JSX fragment  */}

// //       {/* HeadingCOmponent */}

// //       {/* HEROSECTION */}
// //       {/* <h1>This is heading </h1> */}
// //       <Heading />

// //       {/* <Count /> */}
// //       {/* <Heading></Heading> */}
// //       <section id="">
// //         <h1>This is my First React Project</h1>

// //         counter: {counter}

// //         <button onClick={() => {
// //           // counter++

// //           setCounter(counter + 1)
// //           console.log(counter);

// //         }}>
// //           Increment
// //         </button>
// //       </section>

// //       <footer>
// //         this is footer
// //       </footer>

// //     </>

// //   )
// // } // functional component -> App

// // export default App


// // // function Counter(count) {
// // //   count = count + 1
// // //   return count
// // //   return newCount
// // // }



// // // JS function -> only return single value
// // // function Counter(count) {
// // //   count = count + 1
// // //   const newCount = count + 3
// // //   return count, newCount
// // // }





// const obj = {
//   name: "John",
//   age: 30,
//   city: "New York"
// }
// // const age = obj.age
// const { age, name } = obj




