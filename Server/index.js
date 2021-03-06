const express = require('express');
const port = 4042;
const app = express();
app.use(express.json());

const {
    getTickets,
    postTickets,
    addNotes,
    editTicket,
    deleteTicket
} = require('./controller');

app.get('/api/tickets', getTickets);
app.post('/api/tickets', postTickets);
app.post('/api/tickets/notes', addNotes);
app.put('/api/tickets/:id', editTicket);
app.delete('/api/tickets/:id', deleteTicket);

app.listen(port, () => console.log(`Listening on port ${port}`));
