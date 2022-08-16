const model = require("../models/model")

module.exports = {

    read: async function (req, res) {
        res.status(200).json('get')
    },

    readById: async function (req, res) {
        res.status(200).json('get')
    },

    create: async function (req, res) {
        res.status(200).json('get')
    },

    update: async function (req, res) {
        res.status(200).json('get')
    },

    delete: async function (req, res) {
        res.status(200).json('get')
    },
}