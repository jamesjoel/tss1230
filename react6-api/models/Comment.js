require("../config/db");

const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    postId : Number,
    id : Number,
    name : String,
    email : String,
    body : String
})

module.exports = mongoose.model("comment", CommentSchema);