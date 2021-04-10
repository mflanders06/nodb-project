//import Ticket from './Ticket'

function List(props){
    const {tickets} = props;
    //console.log('the tickets are', tickets)
    const mappedTickets = tickets.map((value) => {
        
        <div>
            <div>{value.id}</div>
            <div>{value.customer}</div>
            <div>{value.title}</div>
            <div>{value.notes}</div>
            <div>{value.active}</div>
        </div>
    })

    console.log(mappedTickets);

    return(
        <div>
            {mappedTickets}
        </div>
    )
}

export default List;