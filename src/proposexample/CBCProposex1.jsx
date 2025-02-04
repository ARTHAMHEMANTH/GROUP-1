import React, {Component} from 'react';

  class CBCProposex1 extends Component {
    render(){
        console.log(this);
        return(
            <div>
                CBCPropose1
                <h1>{this.props.username}</h1>
                <h2>{this.props.age}</h2>
                <div>
                    {this.props.design[0]}
                </div>
                <h2>{this.props.userDetails.area}</h2>
                <button onClick={this.props.sendFun}>click on butoon</button>

            </div>
        )
    }
  }
  export default CBCProposex1;