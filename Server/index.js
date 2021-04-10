const express = require('express');
const port = 4042;
const app = express();
app.use(express.json());

const {
    getTickets
} = require('./controller');

app.get('/api/tickets', getTickets);

app.listen(port, () => console.log(`Listening on port ${port}`));