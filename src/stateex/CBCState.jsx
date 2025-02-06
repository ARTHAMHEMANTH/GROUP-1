import React, { Component } from 'react';
class CBCState extends Component{
    constructor(){
        super();
        this.state={
            username:"Hemanth"
        };
    }
    changeName=()=>{
        this.setState({username :"Shiva"});
    }
    render(){
        console.log(this);
        return(
            <div>
                CBCState
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Update the State</button>
            </div>
        )
    }
}
export default CBCState