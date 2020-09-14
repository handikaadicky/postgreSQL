const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('beginning heroku'))
app.listen(port, (req, res) => console.log(`listen to ${port}`))