import React, { useState } from 'react';

const Hook1 = () => {
     const [count,setCount]=useState(1)
     const handle_count_up=()=>{
        setCount(count+1) //coutn=count+1
     }
     console.log("render hook1")
    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={handle_count_up}>Count up</button>

        </div>
    );
}

export default Hook1;
