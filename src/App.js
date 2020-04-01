import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {userName: '',
                  users: []
                 
                 };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  
  handleChange(event) {

    
    this.setState({ userName: event.target.value
                    
                    })
  }

   handleSubmit(event) {
    
    event.preventDefault()
    const previousInput = this.state.userName;
    this.setState({ 
      value: '',
      users: [...this.state.users, previousInput]
      
      })

       

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
        <p>{this.state.users}</p>
      </form>
    )
  }
}

export default App;

