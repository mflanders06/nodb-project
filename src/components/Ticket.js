//import { axios } from 'axios';
import React, {Component} from 'react';
class Ticket extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: ""
        }

        this.handleNoteChange = this.handleNoteChange.bind(this);
    }




handleNoteChange(e){
    this.setState({note: e.target.value})
    //console.log(this.state.note);
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

    return(
        <div key={value.id} className="ticket">
            <div className="listID">{value.id}</div>
            <div className="listCustomer">{value.customer}</div>
            <div className="listTitle">{value.title}</div>
            <ul>
                {innerNotes}
                <input placeholder="Add note here" onChange={this.handleNoteChange} ></input>
                <button onClick={() => this.props.insertNote(value.id, this.state.note)}>Add Note</button>

            </ul>


            <div className="active">{value.active}</div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
})


    return(
        <div>
            {mappedTickets}
        </div>
    );
}

}

export default Ticket;