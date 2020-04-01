import React from 'react';
import UserCard from './UserCard';
// import { Collapsible , CollapsibleItem } from 'react-materialize';


const UserCardList = props => {
  const { users } = props;
  console.log("data passed into userCardList", users)
  return (
    <Collapsible accordion>
      {users.length > 0 ? (
        console.log("user data",userData)
        userData.map((user,index) => (
            <CollapsibleItem 
                key={index}
                expanded={false}
                header="test"
                
                node="div"
            >
                <UserCard user={user}/>
            </CollapsibleItem>
        ))
      ) : (
        <li>No User Data</li>
      )}
    </Collapsible>
  );
};

export default UserCardList;