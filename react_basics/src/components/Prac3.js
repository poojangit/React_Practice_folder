import React from 'react';
import { useState, useEffect } from 'react';

function Prac3() {
    const[count, setCount] = useState(0)
    const[showText, setShowText] = useState(false)
    function incre () {
        setCount(increment => increment+ 1)
        return count
    }
    useEffect(() => {
        console.log("Run only once");
    }, [])

    useEffect(() => {
        console.log("hii");
    })

    useEffect(() => {
        if(count === 5) setShowText(true)
    }, [count])
  return (
    <div>
        <h1>{count}</h1>
        {
            showText ? <h3>Hello world</h3> : null
        }
        
        <button onClick={incre}>Increment</button>
        
    </div>
  );
}

export default Prac3;
