import React, {Component} from 'react'

class ModeSelect extends Component{
    
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        console.log(e.target.value) //TODO: remove this
        this.props.handleClick(e.target.value)
    }

    render(){
        return(
        <div style={{"display":"flex", "align-items" : "center","padding" : "20px"}}>
        <span style={{"width" : "40%", "margin" : "auto", "text-align" : "center"}}>
        <span style={{"margin-right" : "50px"}}>Search in</span>
            <input type = 'radio' style={{"height" : "20px", "width" : "20px"}} name = 'mode' value = 'form' onClick = {this.handleClick}></input>Forms
            <input type = 'radio' style={{"height" : "20px", "width" : "20px"}} name = 'mode' value = 'document' onClick = {this.handleClick}></input>Documents
        </span>
        </div>
        )
    }
}

export default ModeSelect