const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/tss12");

const Student = mongoose.Schema({
    name : String,
    email : String,
    address : String,
    gender : String,
    contact : Number,
    city : String
});

const StudentModel = mongoose.model("student", Student);

module.exports = StudentModel;