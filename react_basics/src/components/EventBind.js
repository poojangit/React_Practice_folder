import React, { Component } from 'react';

// ^ Binding event Handlers

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState ({
    //         message : 'GoodBye'
    //     })

    //     console.log(this);
    // }
    // this keyword is undefined in a event handler and that is the reason event binding is necessary
  
    clickHandler = () => {
        this.setState({
            message : 'GoodBye'
        })
    }
  
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* first approach---> Binding in render */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        
        {/* Seccond Approach---> Arrow function in render*/}
        {/* <button onClick={() => this.clickHandler()}> Click</button> */}
     
        {/* Third approach ---> binding in the class constructor*/}
        {/* <button onClick={this.clickHandler}>click</button> */}

        {/* last -> using arrow function as a class property */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
