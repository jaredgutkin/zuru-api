const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

connectDB()



const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/mbs1', require('./routes/miniBrandSeries1'))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.yellow.bold)
})
