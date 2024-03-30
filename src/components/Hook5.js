import React, { useState } from 'react';

const Hook5 = () => {
    const [a,setA]=useState('')
    const [b,setB]=useState('')
    const [kq,setKq]=useState(0)
    return (
        <div>
           <label>Nhập a</label> <input value={a} onChange={(e)=>setA(e.target.value)}/>
           <label>Nhập b</label> <input value={b} onChange={(e)=>setB(e.target.value)}/>
           <button onClick={()=>setKq(a*1+b*1)}>+</button>
           <button onClick={()=>setKq(a-b)}>-</button>
           <button onClick={()=>setKq(a*b)}>X</button>
           <button onClick={()=>setKq(a/b)}>/</button>
           <h1>Kết quả: {kq}</h1>
        </div>
    );
}

export default Hook5;
