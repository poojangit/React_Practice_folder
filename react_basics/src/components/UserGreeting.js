import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    

  render() {

    return this.state.isLoggedIn && <div>hello pooja</div>

//^--------------------------------
return this.state.isLoggedIn ? (
    <div>Welcome Pooja</div>
) : (
    <div>Welcome Guest</div>
)
//^------------------------------------------

//^ ------------------
    // return (
    //     this.state.isLoggedIn ? <div>Welcome pooja</div> : <div>Welcome Guest</div>
    // )
//^------------------------------   
    // ^this approach can be used inside the jsx-----------
    // let message 
    // if(this.state.isLoggedIn) {
    //     message = <div>Hello Pooja</div>
    // }
    // else {
    //     message = <div>Hello Guest</div>
    // }
 //^------------------------------
    // return <div>{message}</div>
    // if(this.state.isLoggedIn) {
    //     return (
    //         <div>Welcome Pooja</div>
    //     )
    // }
    // else {
    //     return (
    //         <div>Welcome Guest</div>
    //     )
    // }



    // return (
    //   <div>
    //    <div>Welcome Pooja</div> 
    //    <div>Welcome Guest</div> 
    //   </div>
    // );
  }
}

export default UserGreeting;
