import React from 'react';

function Counter() {
    var [count,setCount]=React.useState(0);
    
    function inc(){
        setCount(count+1)
    }
    function dec() {
        setCount(count-1)
    }
    return(
        <div className="betterview">
            <h1>Count:{count}</h1>
            <button onClick={inc}>Inc...</button>
            <button onClick={dec}>Dec...</button>
        </div>
    )
}
export default Counter;