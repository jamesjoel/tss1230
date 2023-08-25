const routes = require("express").Router();
const Category = require("../models/Category");

routes.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send(result);
})
routes.get("/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Category.find({_id : id});
    res.send(result);
})
routes.post("/", async(req, res)=>{
    await Category.create(req.body);
    res.send({ success : true });
})
routes.delete("/:id", async(req, res)=>{
    let id = req.params.id;
    await Category.deleteMany({_id : id })
    res.send({ success : true });
})
routes.put("/:id", async(req, res)=>{
    let id = req.params.id;
    await Category.updateMany({_id : id }, req.body);
    res.send({ success : true });
})



module.exports = routes;