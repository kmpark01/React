import React from 'react';
import '../css/Container.css';
import UserList from './UserList';
import User from './User';
const Container = () => {

  const users = [
    {name : 'kim', age : 10},
    {name : 'lee', age : 20},
    {name : 'park', age : 30}
  ];

  let userList = users.filter(user => user.age <= 20);
  userList = userList.map((user, index) => {
    return <User key={index} name={user.name} age={user.age}/>
  });
  return (
    <UserList>
      {userList}
    </UserList>
  );
};

export default Container;