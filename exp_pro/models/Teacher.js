// 1. connection stablished into database with tss12
const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss12");
const Teacher = mongoose.Schema({
    fullname : String, 
    salary : Number,
    city : String,
    address : String,
    gender : String
})

module.exports = mongoose.model("teacher", Teacher);

