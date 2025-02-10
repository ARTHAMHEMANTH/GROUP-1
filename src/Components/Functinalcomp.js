// import React from 'react'
// import './Global.css'

// function Functinalcomp(props){
//     console.log(props)
//     let className = props.apply ? 'heading':'';
//     let inline = {
//         color : 'Red',
//         fontsize : '200px'



//     }
//     return (
//         <div>
//             <h1 style={inline}>
//                 Welcome to MRU {props.city} {props.children}

//             </h1>
//         </div>
//     )
// }
// export default Functinalcomp;


import React, {Component} from 'react';

export class Functionalcomp extends Component{
    constructor(props){
        super(props)

        this.state = {
            textValue:"",
            skill:'view'
        }
    }
    changeTextValue = (event)=>{
        this.setState({
            textvalue:event.target.value
        })
    }
    changeSkill =(event)=>{
        this.setState({
            skill:event.target.value
        })
    }
    submitValues = (event)=>{
        alert("Form is submitted"+ '${this.state.textValue}${this.state.skills}')
    }
    render(){
        return(
            <div>
                <form
                    onSubmit={this.submitValues}>
                        <label>
                            FirstName
                        </label>
                        <input type = 'text' value={this.state.textValue} onChange = {this.changeTextValue}></input>
                        <br/>
                        <label>skills</label>
                        <select value={this.state.skills} onChange={this.changeSkills}></select>

                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='view'>View</option>

                    <button type='submit'>Submit</button>
                    </form>
            </div>
        )
    }
}
export default Functionalcomp