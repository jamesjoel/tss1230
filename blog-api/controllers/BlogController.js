const routes = require("express").Router();
const Blogs = require("../models/Blogs");
const jwt = require("jsonwebtoken")
const key = require("../config/secretKey")

routes.get("/", async(req, res)=>{
    let result = await Blogs.find();
    res.send(result)
})
routes.get("/user", async(req, res)=>{
    if(req.headers.authorization){

        let token = req.headers.authorization;
        let obj = jwt.decode(token, key);
        let id = obj.id;
        let result = await Blogs.find({bloggerid : id});
        res.send(result)
    }else{
        res.send({ success : false });
    }
})

routes.delete("/user/:id", async(req, res)=>{
    if(req.headers.authorization){
        let id = req.params.id;
        await Blogs.deleteMany({_id : id});
        res.send({ success : true });

    }else{
        res.send({ success : false });
    }
})

routes.post("/", async(req, res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, key);
    let id = obj.id;
    req.body.bloggerid = id;
    await Blogs.create(req.body);
    res.send({ success : true });

})

module.exports = routes;
