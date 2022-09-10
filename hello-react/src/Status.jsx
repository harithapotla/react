import React from "react";
import Ex from "./ex";

function FStatus(){
    var [name,setname]=React.useState([
        {
            title:'love',
            status:true
        },
        {
            title:'hate',
            status:false
        },
        {
            title:'care',
            status:true
        },
        {
            title:'attention',
            status:true
        }
    ]);
    function toggle(id){
        var temp=[...name];
        name[id].status=!name[id].status;
        setname([...temp])
    }
    return(
        <div className="betterview">
            <h1>About Ethics</h1>
            <ul>
                {
                    name.map((x,i)=>{
                        return(<Ex x={x} i={i} toggle={toggle}></Ex>)
                    })
                }
            </ul>
        </div>
    )
}
export default FStatus;