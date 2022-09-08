import React from 'react';

function Todolist(props) {
    var [todo,setTodo]= React.useState(['learn code', 'read well']);
    var [newTodo,setNewTodo]=React.useState('');
    var myref = React.useRef()
    function addTask(){
        setTodo([...todo,newTodo]);
    }
    function deleteTask(id){
       var temp=[...todo];
       temp.splice(id,1);
       setTodo([...temp])

    }
     function checkEnter(e){
      if (e.key==="Enter"){
        addTask();
      }

     }
   React.useEffect(()=>{
      myref.current.focus()
   })
    
    return(<div className="betterview">
        <h1>TO DO LIST</h1>
        <h1>{props.fn}</h1>
        <input type="text" onChange={(e)=>{setNewTodo(e.target.value)}} ref={myref} onKeyUp={checkEnter}/>
        <button onClick={addTask}>Add Task</button>
        <ul>
            {
                todo.map((t,i)=>{
                    return(<li>{t}
                    <button onClick={()=>{deleteTask(i)}}>Del</button></li>)
                })
            }
        </ul>
    </div>)
}
export default Todolist;