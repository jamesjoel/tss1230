require("../config/db");
const mongoose = require("mongoose");

const HotelsSchema = mongoose.Schema({
    ownerid : mongoose.Schema.Types.ObjectId,
    hotelname : String,
    address : String,
    classtype : String,
    facilities : [],
    normalroom : { type : Number, default : 0},
    deluxroom : { type : Number, default : 0},
    luxaryroom : { type : Number, default : 0}
    
})



/*
    {
        hotelsename : "Saayaji",
        facilities : [],
        normalroot : ''

    }
*/

module.exports = mongoose.model("hotel", HotelsSchema);