const routes = require("express").Router();
const Stu = require("../models/Student");


routes.get("/", async(req, res)=>{
    let result = await Stu.find();
    res.send(result);
})


module.exports = routes;