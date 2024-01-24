import React,{useState} from 'react';

const HooksEx = () => {
    
    const [count,setCount]=useState(0);
    const [msg,setMsg]=useState('hello');
    
    const increment=()=>{
        setCount(count+1)
    }
    const update=()=>{
        setMsg("changed")
    }
    return (
        <div>
            <h1>hooks concept</h1>
            <h1>count:{count}</h1>
            <h1>Message:{msg}</h1>
            <button onClick={increment}>+</button>
            <button onClick={update}>change</button>
        </div>
    );
};

export default HooksEx;