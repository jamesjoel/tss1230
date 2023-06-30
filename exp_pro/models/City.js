const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss12");

const CitySchema = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"});

module.exports = mongoose.model("city", CitySchema);
// cities