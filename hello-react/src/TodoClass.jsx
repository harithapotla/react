import React from "react";
class TodoClass extends React.Component{
    render(){
        return(<li>{this.props.t}</li>)
    }
}
export default TodoClass;