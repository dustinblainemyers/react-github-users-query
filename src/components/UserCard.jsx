import React, { Component } from "react";

class UserCard extends Component {


   

    

    render(){
            const users = this.props.users;
        
       return (
        <div className='usercard'> 
           {users.length > 0 ? (
        users.map((user,index) => (
            
            <p>{user.login}</p>
            
        ))
      ) : (
        <li>No User Data</li>
      )}
       </div>
       )
    }
}


export default UserCard;