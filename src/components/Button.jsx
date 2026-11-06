import React from 'react'




function Button({ ClickFunction, btnText }) { // event will be pass as prop
    // const handleClick = () => {
    //     console.log("Buttom Component Clicked!");
    // }

    return (
        <button onClick={ClickFunction} style={{ color: "white", backgroundColor: "red" }}>{btnText}</button>
    )
}

export default Button