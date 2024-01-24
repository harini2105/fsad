import React ,{useState} from 'react';

const UseEffectWithObjects= () => {
    const[student,setCollege]=useState(
        {
            name:'Harini',
            college:'SVECW'
        }
    )
    const change=()=>{
        setCollege({name:'Maggi',college:'Dental'});
    }
    return (
        <div>
            <h1>{student.name}</h1>
            <h1>{student.college}</h1>
            <button onClick={change}>update</button>
        </div>
    );
};

export default UseEffectWithObjects;