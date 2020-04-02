import React from 'react';
import UserCard from './UserCard';
import { Collapsible , CollapsibleItem } from 'react-materialize';
import TestStyle from './TestStyle'


const UserCardList = props => {
  const { users } = props;
  
  return (
    <TestStyle>
    <Collapsible accordion>
      {users.length > 0 ? (
        
        users.map((user,index) => (
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
    </TestStyle>
  );
};

export default UserCardList;