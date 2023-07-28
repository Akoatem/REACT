// class component
// // use rce shoutcout
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) { // use rconst shoutcout
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){
        // this.setState({ // state param has 2 function, the state method and call back function which is the arrow
        //     count: this.state.count + 1  // this increment the count value in the UI
        // },() =>{
        //     console.log('Callback value', this.state.count)
        // })
        // //this.state.count = this.state.count + 1 // increment of 1

        this.setState((prevState, props) =>({ // this is the last does and doing, pass the argument as previous state
            count: prevState.count + 1 // increment of 5
        }))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    // this area render to the UI front page
  render() {
    return (
      <div>
        <div>Counter -{this.state.count}</div>
        <button onClick={() =>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}
