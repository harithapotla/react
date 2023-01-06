import React from "react";
class TodoClass extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(<li>{this.props.t}
            <button onClick={()=>{this.props.delTask(this.props.id)}}>Del</button></li>)
    }
}
export default TodoClass;