import React, { Component } from 'react';

export class InputChildRef extends Component {
    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type='text'ref = {this.inputRef}></input>
      </div>
    );
  }
}

export default InputChildRef;
