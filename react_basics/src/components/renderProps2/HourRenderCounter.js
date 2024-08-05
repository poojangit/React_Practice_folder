 
//  import React, { Component } from 'react';
 
//  class HourRenderCounter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count : 0
//       }
//     }

//     increment = () => {
//         this.setState(prevState => {
//             return {count : prevState.count + 1}
//         })
//     }

//    render() {
//     const {count} = this.state
//      return (
//        <div>
//          <button onClick={this.increment}>Click {count} times</button>
      
//        </div>
//      );
//    }
//  }
 
//  export default HourRenderCounter;
 

import React, { useCallback, useState } from 'react';

const HourRenderCounter = () => {
    const [count, setCount] = useState(0)
    
    const increment = useCallback(() => {
        setCount(prevCount => prevCount+1)
    })
  return (
    <div>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
}

export default HourRenderCounter;

