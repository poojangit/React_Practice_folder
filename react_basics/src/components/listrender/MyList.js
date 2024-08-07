import React, { useEffect, useState } from 'react';

const MyList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/list.json')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Item List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyList;
