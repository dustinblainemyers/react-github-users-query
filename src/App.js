import React, { Component } from 'react';
import UserCardList from './components/UserCard'
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
         
         const apiTest = [...this.state.users, result]
    
          this.setState({
              userName: '',
              users: apiTest
              
          });

      })

    
      

      
  }



  render() {
    console.log('what app is passing', this.state.users)

    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
        
      </form>
      
      <UserCardList users={ this.state.users}/>
    </div>
    )
  }
}

export default App;

