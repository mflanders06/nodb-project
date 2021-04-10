const tickets = [
    {
        "id":1,
        "customer": "Bubba",
        "title": "I lost my computer",
        "notes": [
            "Does not have any computer info",
            "Does not remember where computer was",
            "Isn't sure he has owned a computer",
            "Isn't sure what a computer is"
        ],
        "active": true
    }
]

id = 2;

module.exports = {
    getTickets: (req, res) => {
        res.status(200).send(tickets);
    },

    postTickets: (req, res) => {
        const { customer, title } = req.body;
        tickets.push({id, customer, title, notes:[], active: true});
        res.status(200).send(tickets);
        id++;
        
    },

    addNotes: (req, res) => {
        const {notes} = req.body;
        const {id} = req.query;

        const index = tickets.findIndex( value => value.id === parseInt(id));
        tickets[index].notes.push(notes);
       
        res.status(200).send(tickets);

    },

    editTicket: (req, res) => {
        const {customer, title} = req.body;
        const {id} = req.params;

        const index = tickets.findIndex( value => value.id === parseInt(id));
        tickets[index].customer = customer;
        tickets[index].title = title;

        res.status(200).send(tickets);
    }
    
}
