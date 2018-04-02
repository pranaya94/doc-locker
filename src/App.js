import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'

import Login from './Login'
import Omnibar from './Omnibar'
import FormsContainer from './FormsContainer'
import ModeSelect from './ModeSelect'
import DocumentsContainer from './DocumentsContainer'
import Navbar from './Navbar'
import Register from './Register'

class App extends Component {

  constructor(){
    super()
    this.state = {
      loggedIn : false,
      formName : '',
      searchMode : ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleModeChange = this.handleModeChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }
  componentWillMount(){
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
            this.setState({              
                  loggedIn : true
                })
            console.log(this.state)
            this.props.history.push('/')
        }else{
          this.props.history.push('/login')
        }
    }
    xhr.open('POST','/api/authenticate',true)
    let token = window.localStorage.getItem('access_token');
    xhr.setRequestHeader('Authorization','Bearer ' + token);
    xhr.send()                            

  }

  handleSearchChange(searchText){
    if(searchText.match(/^[a]/i)){
    this.setState({
      formName : 'aadhaar'
    })
  }else if(searchText.match(/^[ve]/i)){
    this.setState({
      formName : 'voterid'
    })
  }else{
    this.setState({
      formName : ''
    })
  }
  }

  handleLogin(boo){
    this.setState({
      loggedIn : boo
    })
  }

  handleLogout(boo){
    this.setState({
      loggedIn : boo
    })
  }

  handleModeChange(searchMode){
    this.setState({
      searchMode : searchMode
    })
  }

  render() {
    if(this.state.loggedIn){
    return (
      <Router>
     <div>
       <Navbar loggedIn={this.state.loggedIn} handleLogout={this.handleLogout}/>
       <Omnibar handleChange = {this.handleSearchChange} />
       <ModeSelect handleClick = {this.handleModeChange}/>
       {this.state.searchMode === 'form' && this.state.formName && <FormsContainer formName = {this.state.formName} />}
       {this.state.searchMode === 'document' && this.state.formName && <DocumentsContainer formName = {this.state.formName} />}
      </div>
      </Router>
    )

  }else{
    
    return (
      <Router>
      <div>
        <Navbar />
        <Route path = "/login" exact render={(props) => <Login {...props}  handleLogin={this.handleLogin}/>} />
        <Route path="/register" exact component={Register} />
      </div>
      </Router>
    )
  }
}

}

export default withRouter(App);
