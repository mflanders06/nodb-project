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

module.exports = {
    getTickets: (req, res) => {
        console.log('this worked');
        res.status(200).send(tickets);
    }
    
}