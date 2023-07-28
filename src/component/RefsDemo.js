// use rce to create a class component

import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef =  React.createRef()
      // callback Ref apporach
      // 1st
      this.cbRef = null
      // 2nd create a method and assign to a dom element
      this.setcbRef = (element)=> {
        this.cbRef = element
      }

    }

    componentDidMount(){
        //  callback apporach
        if(this.cbRef){
            this.cbRef.focus()
        }
        // create approach
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

  render() {
    return (
      <div>
        <div>RefsDemo</div>
        <input type='text' ref={this.inputRef}></input>
        <input type='text' ref={this.setcbRef}></input>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default RefsDemo