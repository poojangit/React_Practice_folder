import React from 'react';
import Prac2 from './Prac2';

const Child = (props) => {
  return (
    <div>
      <button onClick={props.showAlert}>Clickme</button>
    </div>
  );
}
export default Child;
