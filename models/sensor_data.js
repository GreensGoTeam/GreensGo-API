const mongoose = require('mongoose')

//The schema that allows us to access to database in a way that is universal 
//and easy.

const DataSchema = mongoose.Schema({
    Time: {
        type: String,
        required: true,
    },
    Temperature: {
        type: String,
        required: true,
        default: 25
    }, 
    HumidityPercentage: {
        type: String,
        required: true,
        default: 100
    }, 
    MoisturePercentage: {
        type: String,
        required: true,
        default: 100
    }, 
    LightIndex: {
        type: String,
        required: true,
        default: 100
    }
})

const Data = mongoose.model('Data',DataSchema)

module.exports = Data