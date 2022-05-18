const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const routes = require('./routes/routes.js')

console.clear();
dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_ACCESS, () => { console.log('DB Connected') })


app.use(express.json())
app.use(cors())
app.use('/', routes)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})