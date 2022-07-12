const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.yellow.bold)
})
