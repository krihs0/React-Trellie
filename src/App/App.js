import "./App.css"
import trelliesObject from "../Data/trellies"
import Trellie from "../Components/Trellie/Trellie"
import React from "react"
import { connect } from "react-redux";

class App extends React.Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props);
        this.props.setTrelliesFromRedux(trelliesObject);
    }

    onActivityAdded = (inputValue, id) =>{
        let oldState = [...this.props.trelliesFromRedux];
        let newState = {
            label: "Vandaag",
            description: inputValue,
            id: oldState[id - 1].activities.length + 1
        }
        oldState[id - 1].activities.push(newState);
        this.props.setTrelliesFromRedux(oldState);
    }

    render(){
         let render = this.props.trelliesFromRedux.map(object =>{
            return <Trellie id={object.id} onActivityAdded={this.onActivityAdded} key={object.id} trellie={object}/>
        })
        return(
            <>
                {render}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trelliesFromRedux: state.trellies
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setTrelliesFromRedux: (payload) => dispatch({type: "TRELLIES", payload: payload}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

