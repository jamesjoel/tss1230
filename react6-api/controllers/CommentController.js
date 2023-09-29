const routes = require("express").Router();
const Comment = require("../models/Comment")


routes.get("/total", async(req, res)=>{
    let total = await Comment.count();
    res.send({ total : total });
})

routes.get("/:a/:b", async(req, res)=>{
    // a = 1, b = 50
    // a = 2, b = 50
    // a = 3, b = 50
    
    let skip = (req.params.a-1)*req.params.b;

    let result = await Comment.find().skip(skip).limit(req.params.b);
    res.send(result);
})


module.exports = routes;