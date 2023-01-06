import React from "react";
import TodoClass from "./TodoClass";

class TodolistClass extends React.Component{
    constructor(){
        super();
        this.state={
            todo:['workout','cook healthy','eat healthy'],
            setNewtodo:''
        }
    }
    add=()=>{
        this.setState({todo:[...this.state.todo,this.state.setNewtodo]})
    }
    enter=(e)=>{
        if(e.key==="Enter"){
            this.add()
        }
    }
    del=(id)=>{
        var temp=[...this.state.todo];
        temp.splice(id,1)
        this.setState({todo:[temp]})
    }
    render(){
        return(<div className="betterview">
        <h1>Todolist using class components</h1>
        <input type="text" onChange={(e)=>{this.setState({setNewtodo:e.target.value})}} onKeyUp={this.enter}/>
        <button onClick={this.add}>Add New Todo</button>
        <ul>
           {
            this.state.todo.map((t,i)=>{
                return(<TodoClass t={t}  id={i} key={i} delTask={this.del}></TodoClass>)
            })
           }
        </ul>
        </div>)
    }
}
export default TodolistClass;
