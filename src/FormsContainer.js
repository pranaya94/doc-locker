import React, {Component} from 'react'
import AadhaarForm from './AadhaarForm'
import VoteridForm from './VoteridForm'
import './FormsContainer.css'

class FormsContainer extends Component{
    
    render(){
        return(
            <div className = "FormsContainer">
                {this.props.formName === 'aadhaar' && <AadhaarForm />}
                {this.props.formName === 'voterid' && <VoteridForm />}
            </div>
        )
    }
}

export default FormsContainer