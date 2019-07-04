import React, {useState} from 'react';
import './App.css';

export function Counter(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>Counter is : {count}</p>
            <button variant="contained" color="primary" onClick={()=> setCount(count+1)}> +1 to Counter</button>
        </div>
    );
}