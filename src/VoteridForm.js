import React, {Component} from 'react'
import './Form.css'

class VoteridForm extends Component{

    constructor(){
        super()
        this.state = {
            voteridNumber : ' ',
            name : ' ',
            dob : ' ',
            address : ' ',
            sex : 'M',
            fathersName : ' ',
            issueDate : ' ',
            posted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        switch(e.target.name){
            case 'voteridNumber' :  this.setState({
                                        voteridNumber : e.target.value
                                    })
                                    break;         
            case 'name' :           this.setState({
                                        name : e.target.value
                                    })
                                    break; 
            case 'dob' :            this.setState({
                                        dob : e.target.value
                                    })
                                    break; 
            case 'address' :  this.setState({
                                       address : e.target.value
                                    })
                                    break;   
            case 'fathersName' :  this.setState({
                                        fathersName : e.target.value
                                    })
                                    break;   
            case 'sex' :  this.setState({
                                        sex : e.target.value
                                    })
                                    break;   
            case 'issueDate' :  this.setState({
                                       issueDate : e.target.value
                                    })
                                    break;  

            default : break;                                       
        }
    }

    handleSubmit(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = () => {
            if(xhr.status === 201 && xhr.readyState === 4){
                this.setState({
                    posted : true
                })
            }
        }
        xhr.open('POST','/api/voterid',true)
        console.log(this.state)
        xhr.setRequestHeader("Content-type","application/json");
        let token = window.localStorage.getItem('access_token');
        xhr.setRequestHeader('Authorization','Bearer ' + token);
        xhr.send(JSON.stringify(this.state))
    }

    render(){
        return(            
                <form className = "Form">
                    <div style={{"width" : "100%", "margin" : "auto", "textAlign" : "center"}}><h3>Voter ID Form</h3></div>
                    <div className="form-group">
                    <label>Voter ID</label>
                    <input type="text" className="form-control" name="voteridNumber" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" className="form-control" name="dob" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <label>Sex</label>                    
                    </div>
                    <select className="form-control" name="sex" onChange={this.handleChange}>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    </select>
                    <div>
                    <label>Father's Name</label>
                    <input type="text" className="form-control" name="fathersName" onChange={this.handleChange}></input>
                    </div>
                    <div>
                    <label>Issue Date</label>
                    <input type="date" className="form-control" name="issueDate" onChange={this.handleChange}></input>
                    </div>
                    
                    {!this.state.posted && <input type="button" className="btn btn-success" value="Submit" onClick={this.handleSubmit}></input>}
                    {this.state.posted && <div className="alert alert-success"><strong>Submitted!</strong></div>}
            </form>          
        )
    }
}

export default VoteridForm
