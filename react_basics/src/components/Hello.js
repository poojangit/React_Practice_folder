import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Pooja .....</h1>
    //     </div>
    // )

    // ! without using JSX

    return React.createElement('div', {id: 'id', className: 'dummy'}, React.createElement('h1', null, 'Good night') )

}

export default Hello