const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const {errorHandler}  = require('./middleware/errorMiddelware')
const router = require('./routes/goalRoutes')
const connectDB = require('./config/db')
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false}))


app.use('/api/goals', router)

app.use(errorHandler)

app.listen(port, () => {console.log(`listen on port ${port}`)})