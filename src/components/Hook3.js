import React, { useState } from 'react';

const Hook3 = () => {
    const [student,setStudent]=useState({name:"Hoàng Nguyên",age:19})
    const handle_change_age=()=>{
        setStudent({...student,age:30})//student={name:"Hoàng Nguyên",age:19,age:30}
    }
    const handle_change_name=()=>{
        setStudent({...student,name:"Lê Mèo"})
    }
    return (
        <div>
            <p>Name:{student.name}</p>
            <p>Age:{student.age}</p>
            <button onClick={handle_change_name}>Change name</button>
            <button onClick={handle_change_age}>Change age</button>
        </div>
    );
}

export default Hook3;
