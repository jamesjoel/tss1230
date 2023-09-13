const routes = require("express").Router();
const Blogs = require("../models/Blogs");
const jwt = require("jsonwebtoken")
const key = require("../config/secretKey")
const path = require("path");

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

routes.get("/:a", async(req, res)=>{
    let result = await Blogs.find({ category : req.params.a});
    res.send(result);
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

    let data = JSON.parse(req.body.formdata);
    let file = req.files.image;

    file.mv(path.resolve()+"/assets/blog-images/"+file.name, async(err)=>{
        if(err){
            console.log(err);
            return;
        }
        data.image = file.name;
        data.bloggerid = id;
        await Blogs.create(data);
        res.send({ success : true });
    });

})

module.exports = routes;
