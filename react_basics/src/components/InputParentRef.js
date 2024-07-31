import React, { Component } from 'react';
import InputChildRef from './InputChildRef';

export class InputParentRef extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    clickHandler =  () => {
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <InputChildRef ref = {this.componentRef}/>
        <button onClick={this.clickHandler}> focus Input</button>
      </div>
    );
  }
}

export default InputParentRef;
