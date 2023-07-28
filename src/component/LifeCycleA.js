// component LifeCycle in React
// mounting lifecycle method, parent component
// use rce to create a class component

import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Ako'
    }
    console.log('LifeCycleA constructor')
  }
  // create 3 states
  // create a static method which takes 2 param props and state

   // Method 1
  static getDerivedStateFromProps(props, state){
    console.log('LifeCycleA getDerivedStateFromProps')
    return null
  }
   // Method 2
  componentDidMount(){
    console.log('LifeCycleA componentDidMount')
  }
  // first method for update
  shouldComponentUpdate(){
    console.log('LifeCycleA shouldComponentUpdate')
    return true
  }
  // second method for update
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleA getSnapshotBeforeUpdate')
    return null
  }
  // third method for update
  componentDidUpdate(){
    console.log('LifeCycleA componentDidUpdate')
  }
  // create a method for change state

  changeState = () =>{
    this.setState({
      name: 'Codevolution'
    })
  }
  // render to UI section
  // Method 3
  render() {
    console.log('LifeCycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA