//import axios from 'axios';
import React, {Component} from 'react';

class AddTicket extends Component{
    constructor(){
        super();
        this.state={
            custInput:"",
            titleInput:""
        }
 
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        //console.log('this is customer', this.state.custInput, 'this is title', this.state.titleInput);
    }

    handleClick = () => {
        const {custInput, titleInput} = this.state;
        this.props.insertTicket(custInput, titleInput);
        this.setState({ custInput: "", titleInput: "" })
    }

    render(){
        return(
            <div>
                <input name="custInput" className="ticketInput" onChange={this.handleChange} ></input>
                <input name="titleInput" className="ticketInput" onChange={this.handleChange}></input>
                <button className="ticketSubmit" onClick={this.handleClick}>Submit</button>

            </div>
        )
    }
}

export default AddTicket;