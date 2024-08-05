import React from 'react';

function UserProp(prop) {
  console.log(prop.name);
  return (
    <div>
     <h1>{prop.name(true)}</h1>
    </div>
  );
}

export default UserProp;
