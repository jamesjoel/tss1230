const routes = require("express").Router();
const User = require("../models/User");
const sha1 = require("sha1");

routes.get("/", async(req, res)=>{
    let result = await User.find();
    res.send(result);
})
// localhost:8080/api/user  --- post
routes.post("/signup", async(req, res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);
    await User.create(req.body);
    res.send({ success : true });
})

module.exports = routes;

/*
    req.body
    req.params

    res.redirect() -------- url hit 
    res.render()    ------ ejs + data send
    res.sendFile()  ------ send only html file
    res.send()      ------ only data send




    mongoimport --db dbname --collection collname --file filename --jsonArray

*/