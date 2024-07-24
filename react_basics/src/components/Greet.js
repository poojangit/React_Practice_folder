import React from 'react'

// function Greet() {
//     return <h1>Hello Pooja</h1>
// }

// ! with ES 6 arrow function 


// export const Greet = () => 
//     <h1>Hellooooo</h1>
// import React from 'react';

// & Using props 

// const Greet = (props) => {
//     console.log(props);
//     return <h1>Have a nice Day {props.name} aka {props.heroName}</h1>
// }
// export default Greet

//^ destructuring - using directly the name instead of props

// const Greet = ({name, heroName}) => {
//     console.log(name, heroName);
//     return <div>Hello {name} aka {heroName}</div>
// }
// export default Greet

//^ second way is destrcturing in a function body

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} are you an {heroName}</h1>
        </div>
    )
}
export default Greet