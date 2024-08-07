import React from 'react';

function ChildMethodCompo(prop) {
    console.log(prop);
  return (
    <div>
      <button onClick={() => prop.greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildMethodCompo;
