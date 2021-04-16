//import { axios } from 'axios';
import React, {Component} from 'react';
class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: "",
            editID: 0,
            custInput:"",
            titleInput:""
        }

        this.handleNoteChange = this.handleNoteChange.bind(this);
    }




handleNoteChange(e){
    this.setState({note: e.target.value})
    //console.log(this.state.note);
}

handleCustomerChange(e){
    this.setState({ custInput: e.target.value })
}

handleTitleChange(e){
    this.setState({ titleInput: e.target.value })
}

ticketEdit(id){
    this.setState({ editID: id })
}

render(){

    const {tickets} = this.props;
//console.log('the tickets are', tickets)

const mappedTickets = tickets.map((value) => {
    const innerNotes = value.notes.map((value, index) => {
        return(
            <li key={index}>{value}</li>
        )
    })

    if (this.state.editID !== value.id){
        return(
            <div key={value.id} className="ticket">
                <div className="listID">{value.id}</div>
                <div className="listCustomer">{value.customer}</div>
                <div className="listTitle">{value.title}</div>
                <ul className="notes">
                    {innerNotes}
                    <input placeholder="Add note here" onChange={this.handleNoteChange} ></input>
                    <button onClick={() => this.props.insertNote(value.id, this.state.note)}>Add Note</button>
                </ul>
                <div className="active">{value.active}</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    }
    else if (this.state.editID === value.id){
        return(
            <div key={value.id} className="ticket">
                <div className="listID">{value.id}</div>
                <div className="listCustomer">{value.customer} <input placeholder="Customer"></input> </div>
                <div className="listTitle">{value.title} <input placeholder="Title"></input> </div>
                <ul className="notes">
                    {innerNotes}
                    <input placeholder="Add note here" onChange={this.handleNoteChange} ></input>
                    <button onClick={() => this.props.insertNote(value.id, this.state.note)}>Add Note</button>
                </ul>
                <div className="active">{value.active}</div>
                <button>Save</button>
                <button>Cancel</button>
                <button>Delete</button>
            </div>
        )
    }
})


    return(
        <div>
            {mappedTickets}
        </div>
    );
}

}

export default Ticket;