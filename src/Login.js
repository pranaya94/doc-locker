import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './LoginRegister.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : '',
            authorized : false,
            submitted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }

    handleChange(e){
        switch(e.target.name){

            case 'email' : this.setState({
                            email : e.target.value
                            })
                            break
            case 'password' : this.setState({
                              password : e.target.value
                            })
                            break
            default : break
        }
    }

    login(){
            this.setState({
                submitted : true
            })
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () =>{
                if(xhr.status === 200 && xhr.readyState === 4){
                    let token = JSON.parse(xhr.responseText);						      		      
                    window.localStorage.setItem('access_token',token['token']);
                    this.setState({
                        authorized : true
                    }) 
                    this.props.handleLogin(true)                     
                }else if(xhr.status === 401 && xhr.readyState === 4){
                    this.setState({
                        authorized : false
                    }) 
                }
            }
            xhr.open('POST','/api/users/login',true)
            xhr.setRequestHeader('Content-type','application/json'); 
            xhr.send(JSON.stringify(this.state))
    }

    render(){
        return(
            <div>            
            <div className="LoginRegister" style={{"float" : "left", "width" : "40%", "margin-left" : "10%"}}><h1>Welcome to Doc Locker!</h1>
            <ul style={{"padding-left" : "none"}}>
                <li>Create an Account, it's free!</li>
                <li>Login and have access to a personal locker for storing all your gov. documents and identity proofs</li>
                <li>We currently support Aadhaar and Voter ID. More documents coming soon!</li>
                <li>Select 'Forms' and enter name of form you wish to generate</li>
                <li>Select 'Documents' and enter name of document you wish to view</li>
            </ul>
            </div>
            <div className="LoginRegister" style={{"margin-left" : "70%"}}> 
                <div><h3>Login</h3></div>           
            <form>
                <div className = "form-group">
                    <label>Email :</label>
                    <input type = "email" className = "form-control" name = "email" onChange = {this.handleChange} required></input>
                </div>    
                <div className = "form-group">
                    <label>Password :</label>
                    <input type = "password" className = "form-control" name = "password" onChange = {this.handleChange} required></input>
                </div>
                <div>
                    <input type = "button" onClick = {this.login} className = "btn btn-success" value = "Submit"></input>
                </div>                
                {!this.state.authorized && this.state.submitted && <div className="alert alert-danger"><strong>Wrong Email/Password!</strong></div>}	
            </form>    
                <Link to="/register">New user? Register here.</Link>
        </div>
        </div>
        )
    }
}

export default Login