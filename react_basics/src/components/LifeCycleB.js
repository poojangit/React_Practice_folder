import React, { Component } from 'react';

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'ooja'
      }
      console.log('lifecycleA constructor');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('lifecycleB getderived');
        return null
    }

    componentDidMount() {
        console.log('lifecycle B component did mount');
    }
    shouldComponentUpdate() {
        console.log('LifecycleB shouldcomponentUpdate');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycleB getsnapshotsBeforeUpdate');
        return null
    }
    componentDidUpdate() {
        console.log('LifeCycle B componentDidUpdate');
    }
  render() {
    console.log('lifecycle B render');
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    );
  }
}

export default LifecycleB;
