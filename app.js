// initial config 
require('dotenv').config()
const express = require("express")
const bodyParser = require("body-parser")
const { default: mongoose } = require("mongoose")
const PORT = 3333
const app = express()

// import routers
const taskRouter = require('./routes/taskRouter')

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/task', taskRouter)
app.use(express.static("public"))

// connect to mongoDB and open a PORT
const USER_NAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD

mongoose.connect(`mongodb+srv://${USER_NAME}:${PASSWORD}@apicluster.o67nljd.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('MongoDB connected! Oi Shurpi')

        app.listen(PORT, () => {
            console.log("Running on port " + PORT);
        })

    })
    .catch((err) => console.log(err))
