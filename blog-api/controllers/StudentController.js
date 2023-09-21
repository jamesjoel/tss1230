const routes = require("express").Router();
const Stu = require("../models/Student");


routes.get("/", async(req, res)=>{
    let result = await Stu.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{
    let result = await Stu.find({_id : req.params._id});
    res.send({ success : true, result : result[0] });
})
routes.post("/", async(req, res)=>{
    let result = await Stu.create(req.body);
    res.send({ success : true, result });
})
routes.put("/:id", async(req, res)=>{
    let result = await Stu.updateMany({_id : req.params.id}, req.body);
    res.send(result);
})
routes.delete("/:id", async(req, res)=>{
    let result = await Stu.deleteMany({_id : req.params.id})
    res.send({ success : true, result });
})


module.exports = routes;