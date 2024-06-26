require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const router = require('./router/index')
const mongoose = require('mongoose')
const errorMiddleware = require('./middlewares/error-middleware')

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
