const express = require('express')
const app = express()
const PORT = 3333

app.get('/', function (request, response) {
    response.json({ message: "Server running" })
})

app.listen(PORT, () => {
    console.log('Server runnning on port: ' + PORT)
})