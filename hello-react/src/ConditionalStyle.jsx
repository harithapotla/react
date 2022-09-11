import React from "react";

function ConditionalStyle(){
    var [ar,setar]=React.useState([12,45,32,49,22,33,10,11]);
    var [newAr,setnewar]=React.useState('');
    var [br,setbr]=React.useState([11,12,13,14,15,15,16]);
    var [newbr,setNewbr]=React.useState('');
    function addar(){
        setar([...ar,newAr])
    }
    function checkEnter(e){
        if(e.key==="Enter"){
            addar()
        }

    }
    function addbr(){
        setbr([...br,newbr])
    }
    function type(e){
        if(e.key==="Enter"){
            addbr()
        }
    }
    return(<div className=" betterview">
        <h1>CONDITIONAL STYLES</h1>
        <input type="text" onChange={(e)=>{setnewar(e.target.value)}} onKeyUp={checkEnter}/>
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
        <input type="text" onChange={(e)=>{setNewbr(e.target.value)}} onKeyUp={type}/>
        <button onclick={addbr}>Add BR</button>
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