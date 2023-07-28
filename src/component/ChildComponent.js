// use rfce to create a function component

import React from 'react'

function ChildComponent(props) {
    // we call the greetHandler here
    // you can use the arrow function and pass many parameters
  return (
    <div>
        <button onClick={() => props.greetHandler('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent