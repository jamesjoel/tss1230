const express = require("express");
const app = express();
const Student = require("./models/Student");
const Info = require("./models/Teacher")


app.use(express.static(__dirname+"/assets"));

app.use(express.json())
app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("pages/home");
})
app.get("/about", (req, res)=>{
    res.render("pages/about");
})
app.get("/about/info", (req, res)=>{
    res.render("pages/info");
})

app.get("/contact", (req, res)=>{
    res.render("pages/contact");
})

app.get("/addstudent", (req, res)=>{
    res.render("pages/add_student");
})

app.post("/form", async (req, res)=>{
    console.log(req.body);
    await Info.create(req.body);
    res.redirect("/teacherlist");
})

app.post("/save", async (req, res)=>{
    // console.log(req.body);
    await Student.create(req.body);
    res.redirect("/liststudent");
})


app.get("/teacherlist", async (req, res)=>{

    let result = await Info.find();

    let pagedata = {result};

    res.render("pages/teacherlist", pagedata);
})

app.get("/liststudent", async (req, res)=>{
    let result = await Student.find();
    let pagedata = {result};
    res.render("pages/liststudent", pagedata);
})


app.get("/teacher", (req, res)=>{
    res.render("pages/teacher");
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Project Running With Port ", port);
})

/*
    flipkart.com            ---- domain
    flipkrt.com/about
    flipkart.com/student/setting

    //


*/