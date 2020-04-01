import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '',
                  userArray: []
                 
                 };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChange(event) {

    
    this.setState({ value: event.target.value
                    
                    })
  }

   handleSubmit(event) {
    
    event.preventDefault()
    const previousInput = this.state.value;
    this.setState({ 
      value: '',
      userArray: [...this.state.userArray, previousInput]
      
      })

       

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
        <p>{this.state.userArray}</p>
      </form>
    )
  }
}

export default App;

