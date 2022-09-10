import React from "react";

function Task(){
    var [task,setTask]=React.useState(['code', 'aim', 'goal','smart'])
    var [newTask,setNewTask]=React.useState('');
     var myref=React.useRef();
    function addTask(){
        setTask([...task,newTask])
    }
    function del(id){
     var temp=[...task];
     temp.splice(id,1);
     setTask([...temp])
    }
    React.useEffect(()=>{
        myref.current.focus()
    })

    function checkEnter(e){
        if(e.key==="Enter"){
        addTask();
        }
    }
    return(<div className="betterview">
      <h1>Tasks</h1>
      <input type="text" onChange={(e)=>{setNewTask(e.target.value)}} ref={myref} onKeyUp={checkEnter}/>
      <button onClick={addTask} >Add Task</button>
      <ul>
        {
            task.map((t,i)=>{
                return(<li>{t}
                <button onClick={()=>{del(i)}}>Delete</button></li>)
            })
        }
      </ul>

    </div>)
}
export default Task;