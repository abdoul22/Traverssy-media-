const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000
const {errorHandler}  = require('./middleware/errorMiddelware')
const router = require('./routes/goalRoutes')
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : false}))


app.use('/api/goals', router)

app.use(errorHandler)

app.listen(port, () => {console.log(`listen on port ${port}`)})