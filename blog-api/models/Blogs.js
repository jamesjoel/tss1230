require("../config/db");
const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    bloggerid : mongoose.Schema.Types.ObjectId,
    title : String,
    category : String,
    detail : String,
    date : {type : Date, default : Date.now}
})

module.exports = mongoose.model("blog", BlogSchema);