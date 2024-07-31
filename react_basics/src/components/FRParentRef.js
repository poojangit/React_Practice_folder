import React, { Component } from 'react';
import FRChildRef from './FRChildRef';

export class FRParentRef extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }
  
  render() {
    return (
      <div>
        <FRChildRef ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click here</button>
      </div>
    );
  }
}

export default FRParentRef;
