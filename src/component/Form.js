// create a class component using rce

import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = { // anything you create something in the form add the state value here
         username: '',
         comments: '',
         topic: 'React'
      }
    }
    // define the method as class props for  handlerUsernameChang

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
            
        })

    }
 // define the method as class props for  handlerCommentChange
 handleCommentChange = (event) =>{
    this.setState({
        comments: event.target.value
    })
 }

 // define the method as class props for handleTopicChange, React is select by default
 handleTopicChange = (event) =>{
    this.setState({
        topic: event.target.value
    })
 }

 // define the method as class props for handleSubmit
 handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
 }

  render() {
    // for code clean up remove this.state for all
    const{username, comments, topic} = this.state
    return ( // add the submit handler on the form tag
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>Username</label>
            <input type='text' value={username}
            onChange={this.handleUsernameChange}></input>
        </div>

        <div>
            <label>Comment</label>
            <textarea value={comments}
            onChange={this.handleCommentChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="React">React</option>
                <option value="Javascript">Javascript</option>
                <option value="Django">Django</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="SpringBoat">SpringBoat</option>
            </select>
        </div>
        <button type='submit'>submit</button>
      </form>
    )
  }
}
