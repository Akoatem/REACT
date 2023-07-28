// class component which is a stateful class

import React from "react";

import { Component } from "react";

class Welcome extends Component{ // the use of properties(props) in classes
    render(){
        return(
         <div>
               <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
         </div>
        ) 
    }

}

export default Welcome