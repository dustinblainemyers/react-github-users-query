import React, { Component } from "react";


class UserCard extends Component {


   

    

    render(){
            const user = this.props.user;
            
        console.log("user", user)

       if(!!user.login) {
        return (
          <div className='usercard'> 
           
            
            
            <p>{user.login}</p>
            <img src={user.avatar_url} alt="Github User"/>
            
           
         
         </div>
         )

       }

       return (
         <p>User Not Found</p>
       )
      
    }
}


export default UserCard;