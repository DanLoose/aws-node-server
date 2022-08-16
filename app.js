const express = require("express")
var bodyParser = require("body-parser")
const router = require("./routes/router")

const PORT = 3333

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/development", router)
app.use(express.static("public"))

app.listen(PORT, () => {
    console.log("Running on port " + PORT);
})
