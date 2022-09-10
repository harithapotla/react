import React from "react";

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
                        return(<li className={x.status?'blueback':'redback'}>{x.title}
                        <button onClick={()=>{toggle(i)}}>{x.status?'undo':'done'}</button>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}
export default FStatus;