// use rce shortcut
// Event binding in react

import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) { // create a constructor rfce
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      //this.clickHandler = this.clickHandler.bind(this) // third approach of binding is the best
    }
    // clickHandler(){
    //     this.setState({ // to change state method
    //         message: 'Goodbye' // good example of binding in javascript

    //     })
    //     console.log(this)
    // }

    clickHandler = ()=>{ // class property as arrow function
        this.setState({
            message: 'Goodbye!'  // the final approach of event binding
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* first approach of event binding*/}
        {/*<button onClick={this.clickHandler.bind(this)}>Click</button>*/}
         {/* second approach of event binding using arrow function approach*/}
        {/*<button onClick={() =>this.clickHandler()}>Click</button>*/}

         {/* Third approach of event binding connecting with the constructor*/}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind