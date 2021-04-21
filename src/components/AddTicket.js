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
            <div className="addTicket">
                <h3>New Ticket:</h3>
                <input name="custInput" className="ticketInput" placeholder="Customer" value={this.state.custInput} onChange={this.handleChange} ></input>
                <input name="titleInput" className="ticketInput" placeholder="Title" value={this.state.titleInput} onChange={this.handleChange}></input>
                <button className="ticketSubmit" onClick={this.handleClick}>Submit</button>

            </div>
        )
    }
}

export default AddTicket;