// use rce to create a class component
// this is how you attach element is dom and class in React

import React, { Component } from 'react'
import Input from './Input'

export class Focusinput extends Component {
    constructor(props) {
      super(props)
      // 1st create a component
      this.componentRef = React.createRef()
      // 2nd attach the ref via componentRef

    }

   clickHandler = () =>{
    this.componentRef.current.focusInput()
   }

  render() {
    return (
      <div>
        <Input ref={this.componentRef}></Input>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Focusinput