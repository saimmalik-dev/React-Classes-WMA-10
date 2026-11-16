import React, { useState } from 'react'




function Button({ ClickFunction, btnText }) { // event will be pass as prop
    // function Button(props) { // event will be pass as prop
    // const handleClick = () => {
    //     console.log("Buttom Component Clicked!");
    // }
    // console.log(props);
    // console.log(props.btnText);
    const [counter, setCounter] = useState(0)
    console.log(counter);

    return (
        // <>Buttn</>
        <button onClick={ClickFunction} style={{ color: "white", backgroundColor: "red" }}>{btnText} {counter}</button>
    )
}

export default Button