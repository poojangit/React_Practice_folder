import React from 'react';
import { UserConsumer } from './UserContext';

function ComponentF() {
  return (
   <UserConsumer>
      {
        (userName) => {
          return <div>Hello {userName} </div>
        }
      }
   </UserConsumer>
  );
}

export default ComponentF;
