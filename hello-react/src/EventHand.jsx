import React from "react";

function EventHandling() {
    function jsx(x){
        console.log(x);
    }
    return(<div className="betterview">
          <h1>Creating a Event Handling Method</h1>
          <button onClick={jsx}>Add Text</button>
          <button onClick={()=>{alert("hello")}}>Another button</button>
          <button onClick={(ev)=>{jsx(100)}}>One more example</button>
    </div>)
}
export default EventHandling;