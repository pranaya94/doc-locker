import React, {Component} from 'react'
import './Form.css'

class AadhaarForm extends Component{

    constructor(){
        super()
        this.state = {
            aadhaarNumber : ' ',
            name : ' ',
            dob : ' ',
            address : ' ',
            posted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        switch(e.target.name){
            case 'aadhaarNumber' :  this.setState({
                                        aadhaarNumber : e.target.value
                                    })
                                    break     
            case 'name' :           this.setState({
                                        name : e.target.value
                                    })
                                    break
            case 'dob' :            this.setState({
                                        dob : e.target.value
                                    })
                                    break
            case 'address' :  this.setState({
                                       address : e.target.value
                                    })
                                    break 
            default : break                                       
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
        xhr.open('POST','/api/aadhaar',true)
        console.log(this.state) //TODO: remove this
        let token = window.localStorage.getItem('access_token');
        xhr.setRequestHeader('Authorization','Bearer ' + token);
        xhr.setRequestHeader("Content-type","application/json")
        xhr.send(JSON.stringify(this.state))
    }

    render(){
        return(            
                <form className = "Form">
                    <div style={{"width" : "100%", "margin" : "auto", "textAlign" : "center"}}><h3>Aadhaar Form</h3></div>
                    <div className="form-group">
                    <label>Aadhaar Number</label>
                    <input type="text" className="form-control" name="aadhaarNumber" onChange={this.handleChange}></input>
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
                    {!this.state.posted && <input type="button" className="btn btn-success" value="Submit" onClick={this.handleSubmit}></input>}
                    {this.state.posted && <div className="alert alert-success"><strong>Submitted!</strong></div>}
            </form>          
        )
    }
}

export default AadhaarForm
