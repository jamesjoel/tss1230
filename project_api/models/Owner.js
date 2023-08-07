require("../config/db");
const mongoose = require("mongoose");

const OwnerSchema = mongoose.Schema({
    ownername : String,
    email : String,
    username : String,
    password : String,
    address : String,
    contact : String,
    city : String
})

module.exports = mongoose.model("owner", OwnerSchema);