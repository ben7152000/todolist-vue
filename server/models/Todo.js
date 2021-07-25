const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema(
  {
    name: { type: String, required: true },
    isDone: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Todo', TodoSchema)
