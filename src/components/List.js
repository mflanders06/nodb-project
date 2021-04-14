//import Ticket from './Ticket'

function List(props){
    const {tickets} = props;
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
                    <input placeholder="Add note here" onChange={props.handleNoteChange} ></input>
                    <button onClick={() => props.insertNote(value.id)}>Add Note</button>

                </ul>


                <div className="active">{value.active}</div>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        )
    })



    return(
        <div className="list">
            <div className="listID">ID</div>
            <div className="listCustomer">CUSTOMER</div>
            <div className="listTitle">TITLE</div>
            <div className="notes">NOTES</div>
            <div className="active">ACTIVE</div>
            {mappedTickets}
        </div>
    )
}

export default List;