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
    render(){
        return(<div className="betterview">
        <h1>Todolist using class components</h1>
        <input type="text" onChange={(e)=>{this.setState({setNewtodo:e.target.value})}} onKeyUp={this.enter}/>
        <button onClick={this.add}>Add New Todo</button>
        <ul>
           {
            this.state.todo.map((t,i)=>{
                return(<TodoClass t={t}></TodoClass>)
            })
           }
        </ul>
        </div>)
    }
}
export default TodolistClass;
