import React from "react";

class CountClass extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
        }
    }
  
    inc=()=>{
        this.setState({count:this.state.count+1})
    }
    dec=()=>{
        this.setState({count:this.state.count-1})
    }
    render(){
        return(<div className="betterview">
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.inc}>Inc</button>
        <button onClick={this.dec}>Dec</button>
        </div>)
    }
}

export default CountClass;