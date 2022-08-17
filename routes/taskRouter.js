// import modules
const Task = require('../models/Task')

// initial config
const express = require('express')
const router = express.Router()

// read all tasks
router.get('/', async (req, res) => {

    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ error })
    }

})

// read task by id
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const task = await Task.findById(id)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error })
    }

})

// create new task
router.post('/', async (req, res) => {
    const { title, body, done } = req.body

    // verify bad request - empty fields
    if (!title) {
        res.status(422).json({ error: 'Titulo é obrigatório' })
        return
    }

    const task = {
        title,
        body,
        done
    }

    try {
        await Task.create(task)
        res.status(201).json({ message: 'pessoa inserida no sistema com sucesso' })
    } catch (error) {
        res.status(500).json({ error })
    }


})

// Update task 
router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const { title, body, done } = req.body

    const task = {
        title,
        body,
        done
    }

    try {
        const updatedTask = await Task.updateOne({ _id: id }, task)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ error })
    }

})

// Delete task
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const deletedTask = await Task.deleteOne({ _id: id })
        res.status(200).json({ message: 'user was deleted successfully' })
    } catch (error) {
        res.status(500).json({ error })
    }
})

module.exports = router