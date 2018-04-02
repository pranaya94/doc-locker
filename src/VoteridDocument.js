import React, {Component} from 'react'
import './Document.css'

class VoteridDocument extends Component{

    render(){
        return(
            <div className="Document" style={{"width" : "100%"}}>
            <div style={{"width" : "100%", "margin" : "auto", "textAlign" : "center"}}><h3>Your Voter ID</h3></div>
                    <label>Voter ID : </label>
                    <div className="DocumentRow">
                    {this.props.data.voteridNumber}
                    </div>
                    <label>Address : </label>
                    <div className="DocumentRow">
                    {this.props.data.address}
                    </div>
                    <label>Date Of Birth : </label>
                    <div className="DocumentRow">
                    {this.props.data.dob}
                    </div>
                    <label>Name : </label>
                    <div className="DocumentRow">
                    {this.props.data.name}
                    </div>                
                    <label>Sex : </label>
                    <div className="DocumentRow">
                    {this.props.data.sex}
                    </div>  
                    <label>Father's Name : </label>
                    <div className="DocumentRow">
                    {this.props.data.fathersName}
                    </div>       
                    <label>Issue Date : </label>
                    <div className="DocumentRow">
                    {this.props.data.issueDate}
                    </div>                                         
            </div>
        )
    }
}

export default VoteridDocument