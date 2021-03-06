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

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.use('/api/mbs1', require('./routes/miniBrandsSeries1'))

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.yellow.bold)
})
