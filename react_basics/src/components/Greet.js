import React from 'react'

// function Greet() {
//     return <h1>Hello Pooja</h1>
// }

// ! with ES 6 arrow function 


// export const Greet = () => 
//     <h1>Hellooooo</h1>
// import React from 'react';

// & Using props 

const Greet = (props) => {
    console.log(props);
    return <h1>Have a nice Day {props.name} aka {props.heroName}</h1>
}
export default Greet