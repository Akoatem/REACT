// use rce to create a class component

import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
      this.inputRef =  React.createRef()
    }
  // create a method focus input
  focusInput(){
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
      </div>
    )
  }
}

export default Input