import React, { PureComponent } from 'react';

export class PureCompo extends PureComponent {
  render() {
    console.log('Pure compo');
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    );
  }
}

export default PureCompo;
