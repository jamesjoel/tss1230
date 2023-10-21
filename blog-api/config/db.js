require("mongoose").connect("mongodb://0.0.0.0:27017/tss12_project")
.then(()=>{
    console.log("DATA BASE CONNECTED");
}).catch((err)=>{
    console.log("NOT CONNECTED ------", err);
});
