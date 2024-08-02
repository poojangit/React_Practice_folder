import React, { Component } from 'react';

export class HoiHoverCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    

hoverHandler = () => {
    this.setState(prevCount => {
        return {count: prevCount.count+1}
    })
}

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 onMouseOver={this.hoverHandler}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default HoiHoverCounter;
