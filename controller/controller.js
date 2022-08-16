const crudModel = require("../models/crud-model")

module.exports = {

    read: async function (req, res) {
        res.status(200).json('get')
    }
}