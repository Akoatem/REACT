// use rce to create a class component
// pure component do not rerender and provide a performance boost
// Component rerender after 2s
// in react we can create a component by extending the pure component class


import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ako'
      }
    }
    // add componentdidmount lifecycle
   componentDidMount(){
    setInterval(() =>{
        this.setState({
            name: 'Ako'
        })
    },2000)

   }

  render() {
    console.log('**************Parent Comp Render**************************')
    return (
      <div>
        <div>Parent Component</div>
        {/*<RegComp name={this.state.name}></RegComp>*/}
        {/*<PureComp name={this.state.name}></PureComp>*/}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp