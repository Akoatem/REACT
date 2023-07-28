// state component
// state can be alter within the component
// state can cause change in the browse 

import React from "react";

import { Component } from "react";

class Message extends Component{ // the use of properties(props) in classes
   // we create a state object using a constructor
    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'

        }
    }
    changeMessage(){
        this.setState({ // this method alter the state of class component
            message: 'Thank you for subscribing'
        })
    }
    render(){ // we bind it here
        return( // we add a handle which will reder the message, which listen to click even
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }

}

export default Message