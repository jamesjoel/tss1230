const routes = require("express").Router();
const path = require("path");

routes.post("/", async(req, res)=>{
    let filedata = req.files.photo;    
    filedata.mv(path.resolve()+"/assets/images/"+filedata.name, (err)=>{
        if(err){
            console.log(err);
            return;
        }
        // console.log("*************** UPLOADED")
        res.send({ success : true });
    });

})


module.exports = routes;
