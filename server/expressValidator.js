const { body } = require('express-validator')

const validator = {
  register: [
    body('username')
      .isLength({ min: 1, max: 10 })
      .withMessage('Name is required, max 10 letters'),
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email'),
    body('password')
      .custom(value => {
        const regex = /^\${8,12}$/
        const result = value.match(regex)
        if (!result) {
          throw new Error('Password length must be between 8-12')
        }
        return true
      })
  ]
}

module.exports = validator
