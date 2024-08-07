import React, { Component } from 'react';

export class RegCompo extends Component {
  render() {
    console.log('regular compo');
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    );
  }
}

export default RegCompo;
