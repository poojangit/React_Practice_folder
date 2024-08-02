import React, { useState } from 'react';
import { Value } from 'sass';

function HookCounterFour() {
    const [items, setItems] =useState([])

    const addItem =() => {
        setItems([
            ...items, {
                id : items.length,
                Value : Math.floor(Math.random() * 10) + 1
            }
        ])
    }
  return (
    <div>
      <button onClick={addItem}> Add a Number</button>
      <ul>
        {
            items.map(item => (
                <li key = {item.id}> {item.Value}</li>
            ))
        }
      </ul>
    </div>
  );
}

export default HookCounterFour;
