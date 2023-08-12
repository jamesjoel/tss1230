const routes = require("express").Router();
const Hotels = require("../models/Hotels");
const jwt = require("jsonwebtoken");
const key = require("../config/secretKey");

routes.post("/", async(req, res)=>{
    // console.log(req.headers);
    let token = req.headers.authorization;
    let obj = jwt.decode(token, key);
    req.body.ownerid = obj._id;
    await Hotels.create(req.body);
    res.send({success : true});
})
// localhost:8080/api/hotels/owner
routes.get("/owner", async(req, res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, key);
    let result = await Hotels.find({ ownerid : obj._id});
    res.send(result)
})

routes.get("/", async(req, res)=>{
    let result = await Hotels.find();
    res.send(result);
})

module.exports = routes;