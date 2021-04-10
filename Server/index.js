const express = require('express');
const port = 4042;
const app = express();
app.use(express.json());

const {
    getTickets,
    postTickets
} = require('./controller');

app.get('/api/tickets', getTickets);
app.post('/api/tickets', postTickets);

app.listen(port, () => console.log(`Listening on port ${port}`));