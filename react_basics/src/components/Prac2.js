
import Child from './Child';

// ^ methods as a props

import React, { Component } from 'react';

export default class Prac2 extends Component {
    showAlert() {
        alert("Hello")
    }
    render() {
        return (
            <Child showAlert = {this.showAlert}/>
        );
    }
}





