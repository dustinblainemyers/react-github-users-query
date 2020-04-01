import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {userName: '',
                  users: [],
                  apiResults: {}
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
    const previousInput = this.state.userName

    fetch(`https://api.github.com/users/${previousInput}`)
      .then(res => res.json())

      .then((result) => {
         console.log("result", result)
         const apiTest = [...this.state.users, result]
    
          this.setState({
              userName: '',
              users: apiTest
              
          });

      })

      console.log('api result', this.state.apiResults)

      

      
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
        
      </form>
    )
  }
}

export default App;

