import React, {Component} from 'react';

class AddTicket extends Component{
    constructor(){
        super();
        this.state={
            custInput:"",
            titleInput:""
        }

    }
    render(){
        return(
            <div>
                <input className="ticketInput"></input>
                <input className="ticketInput"></input>
                <button className="ticketSubmit">Submit</button>

            </div>
        )
    }
}

export default AddTicket;