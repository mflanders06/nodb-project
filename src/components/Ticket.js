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
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
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
    //console.log(this.state.titleInput);
}

ticketEdit(id){             //this is the edit ticket button, not the axios call to edit
    this.setState({ editID: id })
}

saveClick = () => {
    const {editID, custInput, titleInput} = this.state;
    this.props.editTicket(editID, custInput, titleInput);
    this.setState({ custInput: "", titleInput: "", editID: 0 })
}

delClick = () => {
    const {editID} = this.state;
    this.props.delTicket(editID);
    this.setState({ editID: 0 });
}

addNoteButton = (id) => {
    this.props.insertNote(id, this.state.note);
    this.setState({ note: "" });
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
                    <button onClick={() => this.addNoteButton(value.id)}>Add Note</button>
                </ul>
                <div className="active">{value.active}</div>
                <button onClick={() => this.ticketEdit(value.id)} >Edit</button>
                <button onClick={() => this.delClick(value.id)}>Delete</button>
            </div>
        )
    }
    else if (this.state.editID === value.id){
        return(
            <div key={value.id} className="ticket">
                <div className="listID">{value.id}</div>
                <div className="listCustomer">{value.customer} <input placeholder="Customer" onChange={this.handleCustomerChange}></input> </div>
                <div className="listTitle">{value.title} <input placeholder="Title" onChange={this.handleTitleChange}></input> </div>
                <ul className="notes">
                    {innerNotes}
                    <input placeholder="Add note here" onChange={this.handleNoteChange} ></input>
                    <button onClick={() => this.props.insertNote(value.id, this.state.note)}>Add Note</button>
                </ul>
                <div className="active">{value.active}</div>
                <button onClick={this.saveClick} >Save</button>
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