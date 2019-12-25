import React, {Component} from 'react'
import './Navbar.css'
import {withRouter} from 'react-router-dom'

class Navbar extends Component{
    
    constructor(){
        super()
        this.logout = this.logout.bind(this)
    }
    logout(){
        window.localStorage.clear()
        window.sessionStorage.clear()
        
        this.props.handleLogout(false)
        this.props.history.push('/login')

    }
    render(){

        return(
        
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Doc Locker <sub>by Pranaya</sub></span>
          </div>           
          {this.props.loggedIn && <button className='btn btn-primary navbar-btn' onClick={this.logout}>Logout</button>}
        </div>
        </nav>
    )
    }
}

export default withRouter(Navbar)