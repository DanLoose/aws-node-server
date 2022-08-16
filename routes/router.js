const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

// read tasks
router.get('/', controller.read)

// read task by id
router.get('/:id', controller.readById)

// create task
router.post('/:id', controller.create)

// update task
router.put('/:id', controller.update)

// delete task by id
router.delete('/:id', controller.delete)

module.exports = router