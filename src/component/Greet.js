import React from 'react'

// create a new function

// function Greet(){
//     return<h1>Hello World</h1>
// }
//  export default Greet

// using ES6 type

const  Greet = (props)=>{
    console.log(props)
    return(
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
        {props.children}
    </div>
    )
}

export default Greet