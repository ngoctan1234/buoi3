import React, { useState } from 'react';

const Hook4 = () => {
    const [city,setCity]=useState("Hồ Chí Minh")
    return (
        <div>
             <input  placeholder='Enter your city' value={city} onChange={(e)=>setCity(e.target.value)} />
             <p>City name:{city}</p>
        </div>
    );
}

export default Hook4;
