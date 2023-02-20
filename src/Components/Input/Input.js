import React from "react";
import "./Input.css";

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {inputValue: ""}
    }
    
    onInputSubmit = (event) =>{
        event.preventDefault();
        if(this.state.inputValue !== ""){
            this.props.onActivityAdded(this.state.inputValue);
        }  
    }

    onInputChange = (event) =>{
        this.setState({inputValue: event.target.value})
    }

    render(){
        return(
            <form className="input" onSubmit={this.onInputSubmit}>
                <label htmlFor="activity" className="input__label">Nieuwe activitieit</label>
                <input onChange={this.onInputChange} id="activity" className="input__input" type="text" placeholder="..." value={this.state.inputValue}/>
            </form>
            );
        }
    }

export default (Input);