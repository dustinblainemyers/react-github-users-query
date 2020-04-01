import React, { Component } from "react";

class UserCard extends Component {


   

    

    render(){
            const users = this.props.users;
            console.log("usercard props", this.props.users)
        
       return (
        <div className='usercard'> 
           {users.length > 0 ? (
        users.map((user,index) => (
            
            <p>{user.login}</p>
            
        ))
      ) : (
        <></>
      )}
       </div>
       )
    }
}


export default UserCard;