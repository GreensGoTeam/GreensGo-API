require('dotenv').config()

//Basic setup requirements
const express = require('express')
const cors = require('cors');
const app = express()

//This function will prevent any domains and IP's that are not specified to access the API
const corsOptions = {
    origin: process.env.ORIGIN || "http://localhost:5000"
};

app.use(cors(corsOptions));

const mongoose = require('mongoose')

//Basic mongoose configuration.
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true})

//Events that we listen to
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

app.use(express.json())

//The endpoint is defined here.
const SensorRouter = require('./routes/dataPoints.js')
app.use('/dataPoints',SensorRouter)

//The API Starts and uses PORT 3000 by default
app.listen(3001, () => console.log("The server has started"))
