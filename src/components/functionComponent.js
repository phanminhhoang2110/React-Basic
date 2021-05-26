import React, {useState} from 'react';

export default function () {
    const [Count, setCount] = useState(0);
    return (
    <div>
        <h2>{Count}</h2>
        <button onClick={()=>setCount(Count + 1)}>Increment</button>
    </div>)
}