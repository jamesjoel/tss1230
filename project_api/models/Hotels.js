require("../config/db");
const mongoose = require("mongoose");

const HotelsSchema = mongoose.Schema({
    title : String,
    image : String,
    detail : String
    
})

module.exports = mongoose.model("hotel", HotelsSchema);