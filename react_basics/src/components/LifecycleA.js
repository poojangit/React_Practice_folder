import React, { Component } from 'react';
import LifecycleB from './LifeCycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'pooja'
      }
      console.log('lifecycleA constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleA getderived');
        return null
    }

    componentDidMount() {
        console.log('lifecycle A component did mount');
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldcomponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycleA getsnapshotsBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycle A componentDidUpdate');
    }
    changeState = () => {
        this.setState({
            name : 'pree'
        })
    }
  render() {
    console.log('lifecycle A render');
    return (
      <div>
        <h1>LifecycleA</h1>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB/>
      </div>
    );
  }
}

export default LifecycleA;
