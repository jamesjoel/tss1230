const app = require("express").Router();
const Staff = require("../models/Staff");
const City = require('../models/City');

app.get("/list", async (req, res)=>{
    let result = await Staff.find();
    let pagedata = {result}
    res.render("pages/Staff/list", pagedata)
})
app.get("/add", async (req, res)=>{
    let city = await City.find();
    let pagedata = {city};
    res.render("pages/Staff/add", pagedata)
})
app.post("/save", async (req, res)=>{
    await Staff.create(req.body);
    res.redirect("/staff/list");
})
app.get("/delete/:id", async(req, res)=>{
    let id = req.params.id;
    await Staff.deleteMany({ _id : id});
    res.redirect("/staff/list");

})

app.get("/edit/:id", async(req, res)=>{
    let id = req.params.id;
    let result = await Staff.find({_id : id});
    let city = await City.find();
    let pagedata = { result : result[0], city };
    res.render("pages/Staff/edit", pagedata);
    // let result = await Staff.find({city : "indore"});

})

app.post("/update/:id", async(req, res)=>{
    let id = req.params.id;
    await Staff.updateMany({_id : id }, req.body);
    res.redirect("/staff/list");
})







app.get("/details/:a", async(req, res)=>{

    let id = req.params.a;

    let result = await Staff.find({ _id : id });
    let pagedata = { result : result[0]};
    res.render("pages/Staff/detail", pagedata)
})










module.exports = app;


/*

    :3000/staff/info


  app.get("/info", (req, res)=>{
    res.render("pages/about/about");
  })

*/