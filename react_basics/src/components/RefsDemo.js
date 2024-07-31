import React, { Component } from 'react';

 class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    
    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
        console.log(this.inputRef.current);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <input type='text' ref = {this.inputRef}></input>
        <button onClick={this.clickHandler}>submit</button>
      </div>
    );
  }
}

export default RefsDemo;
