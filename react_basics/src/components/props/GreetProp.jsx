import React from 'react';

const GreetProp = (props) => {
  console.log(props);
  // console.log(props.children);
  return (
    <div>
      <h1>My name is {props.name}</h1>
      {props.children}
    </div>
  );
}

export default GreetProp;


// import React, { Component } from 'react';

// export class GreetProp extends Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>My name is {this.props.name} </h1>
//       </div>
//     );
//   }
// }

// export default GreetProp;
