import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './LoginRegister.css'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            email : '',
            password : '',
            passValid : false,
            passMatch : false,
            emailValid : false,
            submitted : false,
            registered : false,
            userAlreadyExists : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.register = this.register.bind(this)
    }

    handleChange(e){
        switch(e.target.name){

            case 'email' : this.setState({
                            email : e.target.value
                            })
                            this.validateEmail(e)
                            break;
            case 'password' : this.setState({
                              password : e.target.value
                            })
                            this.validatePassword(e)
                            break;
            case 'repassword' :                              
                            this.passMatch(e)                          
                            break ;      
            default : break;
        }
    }

    validateEmail(e){
        if(e.target.value.length > 0){
            this.setState({
                emailValid : true
            })
        }else{
            this.setState({
                emailValid : false
            })
        }
    }

    validatePassword(e){
   
            if(e.target.value.length>=6){
                this.setState({
                    passValid : true
                })
            }else{
                this.setState({
                    passValid : false
                })
            }
    }

    passMatch(e){
        console.log(this.state.password)
        console.log(e.target.value)
        if(this.state.password === e.target.value){
            console.log(this.state.password)
            console.log(e.target.value)
            this.setState({
                passMatch : true
            })
    }else{
        this.setState({
            passMatch : false
            })
         }
    }

    register(){
           
            if(!this.state.emailValid || !this.state.passValid || !this.state.passMatch){
                this.setState({
                    submitted : true
                })
                return
            }
            
            let xhr = new XMLHttpRequest()            
            xhr.onreadystatechange = () =>{
                if(xhr.status === 201 && xhr.readyState === 4){
                    this.setState({
                        registered : true
                    })	                    				      		      
                }else if(xhr.status === 400 && xhr.readyState === 4){
                    this.setState({
                        registered : true,
                        userAlreadyExists : true
                    })	                    				      		      
                }
            }
            let regData = {
                email : this.state.email,
                password : this.state.password
            }   
            xhr.open('POST','/api/users/register',true)
            xhr.setRequestHeader('Content-type','application/json');        
            xhr.send(JSON.stringify(regData))
    }

    render(){
        return(
            <div className="LoginRegister">
            <div><h3>Register</h3></div>
            <form>                
                <div className = "form-group">
                    <label>Email :</label>
                    <input type = "email" className = "form-control" name = "email" placeholder = "michaelscott@dundermifflin.com" onChange={this.handleChange} required></input>
                </div>
                {!this.state.emailValid && this.state.submitted && <div style={{"color" : "red"}}>Email can't be blank</div>}       
                <div className = "form-group">
                    <label>Password :</label>
                    <input type = "password" className = "form-control" name = "password" onChange={this.handleChange} required></input>
                </div> 
                {!this.state.passValid && this.state.submitted && <div style={{"color" : "red"}}>Password must be atleast 6 characters in length</div>}       
                <div className = "form-group">
                    <label>Repeat Password :</label>
                    <input type = "password" className = "form-control" name = "repassword" onChange={this.handleChange} required></input>
                </div>  
                {!this.state.passMatch && this.state.submitted && <div style={{"color" : "red"}}>Passwords don't match</div>}             
                <div className = "form-group">
                    <input type = "button" onClick = {this.register} className = "btn btn-success" value = "Submit"></input>
                </div>
                {this.state.registered && !this.state.userAlreadyExists && <div className="alert alert-success"><strong>Registered!<Link to="/login"> Login here.</Link></strong></div>}
                {this.state.registered && this.state.userAlreadyExists && <div className="alert alert-danger"><strong>User already exists!<Link to="/login"> Login here.</Link></strong></div>}
            </form>
           </div>
        
        )
    }
}

export default Register