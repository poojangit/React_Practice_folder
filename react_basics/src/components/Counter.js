
import React,{Component} from "react";

class Counter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
    }

    // ^ below method is by using the current state
    increment() {
    //     this.setState ({
    //         count : this.state.count + 1
    //     }, () => {console.log(this.state.count);})
    //     // console.log(this.state.count);
   

    //^ using the previous state

    this.setState(preState  => ({
        count : preState.count + 1
    }))
    }
    decrement() {
        this.setState ({
            count : this.state.count -1
        })
    }

    incrementFive() {
        this.increment()
        this.increment() 
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <button onClick={() => this.incrementFive()}>IncrementFive</button>
                <div>
                    <button onClick={() => this.decrement()}> Decrement</button>
                </div>
            </div>

        )
    }
}

export default Counter