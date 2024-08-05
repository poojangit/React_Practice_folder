import React from 'react';

function ChildMethodCompo(props) {
    console.log(props);
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildMethodCompo;
