const express = require('express');
const app = express();
const pool = require('./config/db');

app.use(express.json());
app.use(express.static('public'));


app.post('/categories', async (req, res) => {
    const name = req.body.name;
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

