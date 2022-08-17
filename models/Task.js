const mongoose = require('mongoose')

const Task = mongoose.model('Task', {
    title: String,
    body: String,
    done: Boolean
})

module.exports = Task