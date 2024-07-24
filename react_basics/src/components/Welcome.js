import React, { Component } from 'react'

// class Welcome extends Component {
//     render() {
        
//         return (
           
//             <h1>Welcome {this.props.name}</h1>
//         )
//     }
// }
// export default Welcome


//^ destructuring --> 

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props

        // & syntax-->
        // const {state1, state2} = this.state

        return (
           
            <h1>Welcome {name}</h1>
        )
    }
}
export default Welcome

