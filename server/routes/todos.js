const router = require('express').Router()
const Todo = require('../models/Todo')
const verify = require('../verifyToken')

// get todos
router.get('/', verify, async (req, res) => {
  const userId = req.user.id
  try {
    const todos = await Todo.find({ userId })
    res.status(200).json(todos.reverse())
  } catch (e) {
    res.status(500).json(e)
  }
})

// create
router.post('/', verify, async (req, res) => {
  const userId = req.user.id
  const { name } = req.body
  const newTodo = new Todo({ name, userId })
  try {
    const saveTodo = await newTodo.save()
    return res.status(200).json(saveTodo)
  } catch (e) {
    res.status(500).json(e)
  }
})

// update
router.put('/:id', verify, async (req, res) => {
  const _id = req.params.id
  const userId = req.user.id
  try {
    const updateTodo = await Todo.findOneAndUpdate(
      { _id, userId },
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updateTodo)
  } catch (e) {
    res.status(500).json(e)
  }
})

// delete
router.delete('/:id', verify, async (req, res) => {
  const _id = req.params.id
  const userId = req.user.id
  try {
    await Todo.findOneAndDelete({ _id, userId })
    res.status(200).json('The todo has been deleted...')
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
