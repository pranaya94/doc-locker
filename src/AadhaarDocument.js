import React, {Component} from 'react'
import './Document.css'

class AadhaarDocument extends Component{

    render(){
        return(
            <div className="Document" style={{"width" : "100%"}}>
            <div style={{"width" : "100%", "margin" : "auto", "textAlign" : "center"}}><h3>Your Aadhaar</h3></div>
                    <label>Aadhaar Number : </label>
                    <div className="DocumentRow">
                    {this.props.data.aadhaarNumber}
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
            </div>
        )
    }
}

export default AadhaarDocument