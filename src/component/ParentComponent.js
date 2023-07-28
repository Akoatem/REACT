// use rce to create a class component
// create a class parent to pass a child component in the parent
// this is how you pass method as props in react component

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) { // create a constructor rconstr
        super(props)
      
        this.state = {
           parentName: 'Parent'
        }
        // we bind the method in the constructor
        this.greetParent = this.greetParent.bind(this)
    }
   // create a parent method and pass in the constructor parentName
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`) // using template literal ` ` back ticks
    }
    // pass an altribute greetHandler
  render() {
    return ( 
        
      <div>
        <ChildComponent greetHandler ={this.greetParent}></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent