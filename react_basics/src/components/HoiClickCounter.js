import React, { Component } from 'react';

export class HoiClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    clickHandler = () => {
        this.setState( prevstate => {
            console.log(prevstate.count);
            return {count: prevstate.count+1}
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.clickHandler}>Clicked {count}</button>
      </div>
    );
  }
}

export default HoiClickCounter;
