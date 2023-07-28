// create a class component using rce

import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) { // using snipit rconst
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    // 4 approaches to conditional render UI in react
  render() {
    // method 4 short circuit operator, it can be used mostly also
    return this.state.isLoggedIn && <div> Welcome Ako Atem</div>

     // method 3 ternary conditional approach and can be used most od the time

    //  return this.state.isLoggedIn ? (
    //     <div> Welcome Ako Atem</div>
    //     ) : (
    //         <div>Welcome Guest</div>
    //     ) 

    // method 2 using javascript method

    // let message
    // if(this.state.isLoggedIn)
    // {
    //     message = <div> Welcome Ako Atem</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>



    // method 1 using if/else statement

    // if(this.state.isLoggedIn){
    //     return(
    //         <div>
    //             Welcome Ako Atem
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // }

    // return ((
    //     <div>
    //       <div>Welcome Ako Atem</div>
    //       <div>Welcome Guest</div>
    //     </div>
    // )
    // )
  }
}

export default UserGreeting