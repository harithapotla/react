import React from "react";

function ConditionalStyle(){
    var [ar,setar]=React.useState([12,45,32,49,22,33,10,11]);
    var [newAr,setnewar]=React.useState('');
    var [br,setbr]=React.useState([11,12,13,14,15,15,16]);
    function addar(){
        setar([...ar,newAr])
    }
    return(<div className=" betterview">
        <h1>CONDITIONAL STYLES</h1>
        <input type="text"/>
        <button onClick={addar}>1st li</button>
        <ul>
        {
            ar.map((v,i)=>{
                return(<li style={v%2===0 ?{backgroundColor:'red'} :{backgroundColor:'lightgreen'}}>{v}</li>)
            })
        }
        </ul>
        <br/>
        <br/>
        <ul>
        {
            br.map((l,i)=>{
                return(<li className={i%2===0?'blueback' : 'redback'}>{l}

                </li>)
            })
        }
        </ul>
    </div>)
}

export default ConditionalStyle;