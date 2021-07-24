const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
  .then(() => {
    console.log('Database connection successful!')
  })
  .catch((err) => {
    console.log(err)
  })

app.listen(PORT, () => {
  console.log('Backed server is running!')
})
