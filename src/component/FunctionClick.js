// shortcut rfce
// handle event in a functional  component
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
        <div>FunctionClick</div>
        <button onClick={clickHandler}>click</button>
    </div>
  )
    
}

export default FunctionClick