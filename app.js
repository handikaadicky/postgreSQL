const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const db = require('./db/models')

app.get('/', (req, res) => {
    // const response = await db.users.findAll()
    res.send('hello world')
});



app.get('/home', (req, res) => res.send('homeheroku'))

app.listen(port, (req, res) => console.log(`listen to ${port}`))