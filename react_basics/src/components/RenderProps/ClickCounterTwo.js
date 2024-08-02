import React, { Component } from 'react';

export class ClickCounterTwo extends Component {
    // constructor(props) {
    //   super(props)
   
    //   this.state = {
    //     count : 0
    //   }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }
    
  render() {
    // const count = this.state.incrementCount
    // const {count} = this.state
    const {count , incrementCount} = this.props
    console.log(count);
    return (
      <div>
        <button onClick={incrementCount}>clicked {count} times</button>
      </div>
    );
  }
}

export default ClickCounterTwo;
