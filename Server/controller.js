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
notes=[];
active = true;

module.exports = {
    getTickets: (req, res) => {
        res.status(200).send(tickets);
    },

    postTickets: (req, res) => {
        const { customer, title } = req.body;
        tickets.push({id, customer, title, notes, active});
        res.status(200).send(tickets);
        id++;
        
    }
    
}