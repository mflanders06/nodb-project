const express = require('express');
const port = 4042;
const app = express();
app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));