const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/models')

app.get('/', async (req, res) => {
    const response = await db.users.findAll()
    res.send(response)
});



app.get('/home', (req, res) => res.send('homeheroku'))

app.listen(port, (req, res) => console.log(`listen to ${port}`))