import React from "react"


const MyComponent = (props) => {
    return <div>
        <h1>{props.title}</h1>
        <button onClick={props.onButtonClick}>Click me!</button>
        <p>Button press count: {props.count}</p>
    </div>
}


export {MyComponent}