import React from "react";

function TodosStatus(){
    var [todo,setTodo]=React.useState([
        {
            title:'carwash',
            status:false
        },
        {
            title:'grocery',
            status:true
        },
        {
            title:'watering',
            status:true
        }
    ]);
    
function toggle(id){
    var temp=[...todo];
    temp[id].status=!temp[id].status;
    setTodo([...todo]);
    }
    return(
        <div className="betterview">
            <h1>Status todos</h1>
            
            {
                todo.map((v,i)=>{
                    return(<li className={v.status ? 'blueback': 'redback'}>{v.title}
                    <button onClick={()=>{toggle(i)}}>{v.status?"undo":"done"}</button>
                    </li>)
                })
            }
        </div>
    )
}
export default TodosStatus;