const routes = require("express").Router();
const Comment = require("../models/Comment")

routes.get("/", async(req, res)=>{
    let result = await Comment.find();
    res.send(result);
})
routes.get("/total", async(req, res)=>{
    let total = await Comment.count();
    res.send({ total : total });
})


module.exports = routes;