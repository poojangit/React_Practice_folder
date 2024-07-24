import React from 'react';


// ^ Event-Handling
function FunctionClick() {

    function clickHandler () {
        console.log("Button clicked");
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
