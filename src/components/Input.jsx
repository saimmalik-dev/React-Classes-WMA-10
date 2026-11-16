import React from 'react'

function Input({
    type = "text",
    placeholder = "Place holder",
    value = "",
    onChange,

}) {
    return (
        <input type={type} placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
                border: "2px solid red",
                height: "20px",
                borderRadius: "5px",
            }}

        />
    )
}

export default Input