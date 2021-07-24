const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      email,
      password: hashPassword
    })
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json(e)
  }
})

// login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) res.status(400).json('Wrong username or password!')
    const validated = await bcrypt.compare(password, user.password)
    if (!validated) res.status(400).json('Wrong username or password!')
    const asscessToken = jwt.sign(
      { id: user._id },
      process.env.SECRET_KEY,
      { expiresIn: '1d' }
    )
    const { userPassword, ...info } = user._doc
    res.status(200).json({
      info,
      asscessToken
    })
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
