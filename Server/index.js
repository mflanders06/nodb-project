const express = require('express');
const port = 4042;
const app = express();
app.use(express.json());

const {
    getTickets,
    postTickets,
    addNotes,
    editTicket
} = require('./controller');

app.get('/api/tickets', getTickets);
app.post('/api/tickets', postTickets);
app.put('/api/tickets', addNotes);
app.put('/api/tickets/:id', editTicket);

app.listen(port, () => console.log(`Listening on port ${port}`));
