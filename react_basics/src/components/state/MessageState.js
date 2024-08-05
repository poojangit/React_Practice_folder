// import React, { Component } from 'react';

// class MessageState extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message : ' hello Pooja'
//       }
//     }
    
//     changemessage = () =>{
//         this.setState({
//             message : 'Wecome to my website'
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button onClick={this.changemessage}>Welcome</button>
//       </div>
//     );
//   }
// }

// export default MessageState;

import React, { useState } from 'react';

const MessageState = () => {
    const[message, setState] = useState('Hello Pooja')

    const changeName = () => {
        setState('Welcome')
    }
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={changeName}>Click here</button>
    </div>
  );
}

export default MessageState;
