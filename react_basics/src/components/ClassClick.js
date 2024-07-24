import React, { Component } from 'react';

// ^ handled the click event in class component

export class ClassClick extends Component {
    clickhandle() {
        console.log('Button clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.clickhandle}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
