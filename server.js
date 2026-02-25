const express = require('express');
const app = express();
const pool = require('./config/db');

app.use(express.json());
app.use(express.static('public'));


app.post('/categories', async (req, res) => {
    const name = req.body.name;
    try {
        await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
        res.status(201).send('Category added');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding category');
    }
})

app.delete('/categories', async (req, res) => {
    try {
        await pool.query('DELETE FROM categories');
        res.status(200).send('Categories deleted');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting categories');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

