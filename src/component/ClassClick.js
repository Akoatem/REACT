// use rce shortcut
// handle event in a class component
import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button')
    }
  render() {
    return (
        <div>
            <div>ClassClick</div>
            <button onClick={this.clickHandler}>Click Me</button>
        </div> 
    )
  }
}

export default ClassClick