const express = require('express')
const SensorData = require('../models/sensor_data')

const router = express.Router()

router.get('/all',async (req,res) => {

    try {
         const Data = await SensorData.find()
         if (!(Data)) {
              res.status(404).json({message: "No Data was found"})
         }
         else res.json(Data)
         
    } 
    catch (error) {
         res.status(500).json({ message: error.message})
    }
})

module.exports = router