import React, {Component} from 'react'

class Omnibar extends Component{
    constructor(){
        super()
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){        
        this.props.handleChange(e.target.value)
    }

    render(){
        return(
            <div style={{"display":"flex", "align-items" : "center", "position" : "relative", "top" : "10px"}}>
            <input type = "text" placeholder = "Search Ex. 'Aadhaar, Election Card, Voter ID'" style={{"width" : "40%", "margin" : "auto","borderRadius" : "40px", 
            "borderStyle" : "none", "padding" : "20px 40px", "lineHeight" : "28px", "fontSize" : "20px", "outline" : "none", "background" : "black",
            "color" : "white"}}
            onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Omnibar

