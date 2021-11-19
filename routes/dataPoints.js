const express = require('express')
const SensorData = require('../models/sensor_data')

const router = express.Router()

//This method retrieves every single data-points inside of the database
//we use this from the frontend to access the data it would either fail, succeed or find nothing.
//The function runs asynchronous and would not cause errors with other functions.

router.get('/all',async (req,res) => {

     //The function tries to retrieve the data.
     try {
          //The function waits for the correct time to get the data to cause no deadlocks.
          const Data = await SensorData.find()
          if (!(Data)) {
               //There was no data inside of the database.
               res.status(404).json({message: "No Data was found"})
          }
          //The data was found and we send it to where is was requested.
          else res.status(200).json(Data)
     } 
     //The server encountered an error
     catch (error) {
          res.status(500).json({ message: error.message})
     }
})

module.exports = router