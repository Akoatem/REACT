// component LifeCycle in React
// LifeCycle B child component
// use rce to create a class component

import React, { Component } from 'react'

export class LifeCycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Ako'
    }
    console.log('LifeCycleB constructor')
  }
  // create 3 states
  // create a static method which takes 2 param props and state

   // state 1
  static getDerivedStateFromProps(props, state){
    console.log('LifeCycleB getDerivedStateFromProps')
    return null
  }
   // state 2
  componentDidMount(){
    console.log('LifeCycleB componentDidMount')
  }

  // first method for update
  shouldComponentUpdate(){
    console.log('LifeCycleB shouldComponentUpdate')
    return true
  }
  // second method for update
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifeCycleB getSnapshotBeforeUpdate')
    return null
  }
  // third method for update
  componentDidUpdate(){
    console.log('LifeCycleB componentDidUpdate')
  }

  // render to UI section
  // state 3
  render() {
    console.log('LifeCycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB