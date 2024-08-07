import React, { Component } from 'react';
import RegCompo from './RegCompo';
import PureCompo from './PureCompo';
import MemoComp from './MemoComp';

export class PureParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'pooja'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'pooja'
            })
        }, 2000)
    }
    
  render() {
    console.log("*******************Parent compo***********");
    return (
      <div>
        Parent Component
        {/* <RegCompo name = {this.state.name}/> */}
        {/* <PureCompo name = {this.state.name}/> */}
        <MemoComp name = {this.state.name}/>
      </div>
    );
  }
}

export default PureParentCompo;
