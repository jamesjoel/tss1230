const routes = require("express").Router();
const Owner = require("../models/Owner");
const sha1 = require("sha1")
const jwt = require("jsonwebtoken")
const key = require("../config/secretKey");

routes.post("/", async(req, res)=>{
    let u = req.body.username;
    let p = req.body.password; // Abc123
    let result = await Owner.find({ username : u});
    if(result.length > 0){
        if(result[0].password == sha1(p)){
            let obj = { _id : result[0]._id };

            let token = jwt.sign(obj, key, { expiresIn : '5h'});

            res.send({ success : true, token : token, hotelname : result[0].hotelname });
        }else{
            res.send({ success : false, errType : 2})
        }
    }else{
        res.send({ success : false, errType : 1})
    }
})


module.exports = routes;