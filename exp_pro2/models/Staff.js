require("../config/db");
const mongoose = require("mongoose");
const StaffSchema = mongoose.Schema({
    name : String,
    email : String,
    city : String,
    gender : String,
    contact : String
})

module.exports = mongoose.model("staff", StaffSchema);