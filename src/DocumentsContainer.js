import React, {Component} from 'react'
import AadhaarDocument from './AadhaarDocument'
import VoteridDocument from './VoteridDocument'
import './DocumentsContainer.css'

class DocumentsContainer extends Component{

    constructor(){
        super()
        this.state = {
            data : {}
        }
    }

    componentWillMount(){
        switch(this.props.formName){
        
            case 'aadhaar':{
                            let xhr = new XMLHttpRequest()
                            xhr.onreadystatechange = () => {
                                if(xhr.status === 200 && xhr.readyState === 4){
                                    this.setState({
                                        data : JSON.parse(xhr.responseText)
                                    })
                                    console.log(this.state)
                                }
                            }
                            xhr.open('GET','/api/aadhaar',true)
                            console.log(this.state) //TODO: remove this
                            let token = window.localStorage.getItem('access_token');
                            xhr.setRequestHeader('Authorization','Bearer ' + token);
                            xhr.send()                            
                            break;  
                        }

            case 'voterid':{
                        let xhr = new XMLHttpRequest()
                        xhr.onreadystatechange = () => {
                            if(xhr.status === 200 && xhr.readyState === 4){
                                this.setState({
                                    data : JSON.parse(xhr.responseText)
                                })
                                console.log(this.state)
                            }
                        }
                        xhr.open('GET','/api/voterid',true)
                        let token = window.localStorage.getItem('access_token');
                        xhr.setRequestHeader('Authorization','Bearer ' + token);
                        xhr.send()                            
                        break; 
                    }    

            default: break;  
        }
    }

    render(){
        if(this.props.formName === 'aadhaar'){
        return(
            <div className = 'DocumentsContainer'>
            <AadhaarDocument data={this.state.data}/>
            </div>
        )
        }else if(this.props.formName === 'voterid'){
            return(
            <div className = 'DocumentsContainer'>
            <VoteridDocument data={this.state.data}/>
            </div>
             )
        }

    }
}

export default DocumentsContainer