import React from 'react';

const FRChildRef = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='ref' ref={ref}></input>
    </div>
  );
})

export default FRChildRef;
