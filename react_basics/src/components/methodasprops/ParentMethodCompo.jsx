import React, { Component } from 'react';
import ChildMethodCompo from './ChildMethodCompo';

export class ParentMethodCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent : 'Parent'
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parent} from ${childName}`)
    }
   render() {
    console.log(this.state.parent);
    return (
      <div>
        <ChildMethodCompo greetHandler = {this.greetParent}/>
      </div>
    );
  }
}

export default ParentMethodCompo;


// import React, { useCallback, useState } from 'react';
// import ChildMethodCompo from './ChildMethodCompo';

// const ParentMethodCompo = () => {
//     const[parent , setParent] = useState('parent')

//     const greetParent = useCallback((childName) => {
//         alert(`Hello ${parent} from ${childName}`)
//     })
//   return (
//     <div>
//       <ChildMethodCompo greetHandler = {greetParent}/>
//     </div>
//   );
// }

// export default ParentMethodCompo;
