// import React from 'react';
// import { useState } from 'react';
import './Prac1.scss'


// function Prac1() {
//   const[changeName , setChangeName] = useState('Hello Bhavin')
//   function handleChange() {
//     setChangeName('Im  an astronout')
//    }
//   return (
//     <div>
//         <h1 className='helo'>{changeName}</h1>
//         <button onClick={handleChange}>Click here to know about my future</button>
//     </div>
//   );
// }

// export default Prac1;

import React, { Component } from 'react';

export class Prac1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       changeName : 'Hello this is Pooja'
    }
    this.handleClick = this.handleClick.bind(this)
  }
   handleClick() {
    this.setState({
      changeName : 'Helooooooooooooooooooooooooooo'
    })
  }
  

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.changeName}</h1>
          <button onClick={this.handleClick}>Click here</button>
        </div>
      </div>
    );
  }
}

export default Prac1;
