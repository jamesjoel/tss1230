const routes = require("express").Router();
const Hotels = require("../models/Hotels");

routes.get("/", async(req, res)=>{
    let result = await Hotels.find();
    res.send(result);
})

module.exports = routes;