const express = require("express");
const app = express();
const Student = require("./models/Student");


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


app.post("/save", async (req, res)=>{
    // console.log(req.body);
    await Student.create(req.body);
    res.redirect("/about");
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