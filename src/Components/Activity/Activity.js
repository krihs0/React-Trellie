import React from "react";
import "./Activity.css"

class Activity extends React.Component{
    constructor(props){
        super(props)
        this.state = {label: "vandaag"}
    }

    

    onLabelClick = () => {
        console.log("label geklikt")
        if(this.state.label === "vandaag"){
            this.setState({label: "morgen"})
        }else if(this.state.label === "morgen"){
            this.setState({label: "gisteren"})
        } else{
            this.setState({label: "vandaag"})
        }
        console.log(this.state.label)
    }

    render(){
        return(
            <li className="activity">
                <h3 className={'activity__label activity__label--${this.state.label}'} onClick={this.onLabelClick}>{this.state.label}</h3>
                <p className="activity__description">{this.props.activity.description || "Placeholder Description"}</p>
            </li>
        );
    }
}
export default Activity;