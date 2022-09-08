import React from "react";
import {useCounter} from "./hooks"

function HCounter(){
    var [count,inc,dec]=useCounter();
    return(<div className="betterview">
        <h1>Count:{count}</h1>
        <h1>
        <span onClick={inc}>Increment</span><br/>
        <span onClick={dec}>Decrement</span>
        </h1>
    </div>)
}

export default HCounter;