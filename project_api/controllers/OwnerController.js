const routes = require("express").Router();
const Owner = require("../models/Owner");
const sha1 = require("sha1")

routes.get("/", async(req, res)=>{
    let result = await Owner.find();
    res.send(result);
})

routes.post("/", async(req, res)=>{
    delete req.body.repass;
    req.body.password = sha1(req.body.password);
    await Owner.create(req.body);
    res.send({ success : true });
})

module.exports = routes;