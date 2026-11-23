import React, { useEffect, useState } from 'react'
import ResponsiveCard from './ResponsiveCard';

function App() {

    const [products, setProducts] = useState([])
    const [counter, setcounter] = useState(0)

    const getProducts = () => {
        fetch("https://fakestoreapi.noksha.dev/api/products")
            .then((res) => res.json())
            .then((json) => setProducts(json.data || json))
            .catch((error) => console.error("Error fetching products:", error));
    }
    // getProducts()

    console.log("Component mount");
    // useEffect(() => { // allows you to run code after mounting. 
    //     console.log("Use effect runs");
    //     // fetch("https://fakestoreapi.noksha.dev/api/products")
    //     //     .then((res) => res.json())
    //     //     .then((json) => setProducts(json.data || json))
    //     //     .catch((error) => console.error("Error fetching products:", error));
    // }, [])


    //     useEffect(() => {

    //     } // CALLBACK function, 
    // [] // DEPENDENCY ARRAY
    //     )


    // Dependency array 

    useEffect(() => {
        console.log("USE effect runs");

    }, // CALLBACK function, 
        [counter] // DEPENDENCY ARRAY
    )




    // setInterval(() => {
    //     fetch("https://fakestoreapi.noksha.dev/api/products")
    //         .then((res) => res.json())
    //         .then((json) => setProducts(json.data || json))
    //         .catch((error) => console.error("Error fetching products:", error));
    //     console.log("Component rendered after 5 seconds");
    // }, 5000);


    return (
        <div>

            <h1 className="text-3xl text-red-500 sm:text-blue-500">This is heading</h1>
            {/* <button onClick={getProducts}>
                Get Data
            </button> */}
            <ResponsiveCard />
            {/* default tailwind colors
text-red-500 -> 50- 950 range
custom color
text-[hex-code]
text-[rgb]
*/}

            {/* <h1 className='text-blue-500 animate-pulse font-bold font-serif hover:bg-red-600 hover:rounded-lg   hover:font-light  bg-[#ff5733] '>Hello React</h1> */}
            {/* <p>Counter: {counter}</p>
            <button onClick={() => setcounter(counter + 1)}>Increment</button> */}



            {/* {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))} */}
        </div>
    )
}

export default App

// import React from 'react'
// import { useForm } from "react-hook-form"

// function App() {

//     // register -> input state, validation, error handling
//     // handlesumbit -> submit the form
//     // fromState -> errors,

//     const { register, handleSubmit, formState: { errors } } = useForm()
//     // console.log("register", register);
//     // console.log(" handleSubmit,", handleSubmit);
//     // console.log(" formState", formState);
//     // console.log(" formState", formState.errors);
//     console.log(errors);

//     // const { register, handleSubmit, formState: { errors } } = useForm()
//     // handleSubmit() // abhi yeh sirf validations ko check kryga


//     const onSubmit = (values) => {
//         console.log("Form is submitted", data);

//     }

//     return (
//         <div>
//             <form action="" onSubmit={handleSubmit(onSubmit)}>


//                 <label htmlFor='name'>Name <span style={{ color: "red" }}> (*)</span> </label>
//                 <input type="text"
//                  {...register("name", {
//                     required: "Name is required"
//                 })}
//                 />
//                 {errors.name ? <p style={{ color: "red" }}>{errors.name.message}</p> : ""}


//                 <label htmlFor="email">Email</label>
//                 {/* <input type="text" value={} onChange={} name='' id='email' /> */}
//                 <input type="email"
//                     {...register("email", {
//                         required: "Email is required",

//                     })}
//                 />
//                 {errors.email && <p style={{ color: "red" }} > {errors.email.message} </p>}



//                 <button>Submit</button>
//             </form>
//         </div >
//     )
// }

// export default App




// // export default function App() {
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: { errors },
// //     } = useForm({
// //         defaultValues: { email: "" },
// //     })


// //     const onSubmit = (data) => {
// //         console.log(data)
// //     }


// //     return (
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //             <label htmlFor="email">Email</label>
// //             <input
// //                 id="email"
// //                 type="email"
// //                 aria-invalid={errors.email ? "true" : "false"}
// //                 {...register("email", { required: "Email is required" })}
// //             />
// //             {errors.email && <p role="alert">{errors.email.message}</p>}


// //             <button type="submit">Submit</button>
// //         </form>
// //     )
// // }