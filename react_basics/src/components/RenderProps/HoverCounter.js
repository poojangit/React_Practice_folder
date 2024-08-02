import React, { Component } from 'react';

export class HoverCounter extends Component 
{
   
  render() {
    // const {count} = this.state
    const {count, incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}> Hover {count} times</h2>
      </div>
    );
  }
}

export default HoverCounter;
