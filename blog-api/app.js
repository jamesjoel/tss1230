const express = require("express");
const app = express();
const routes = require("./config/allRoutes");
const cors = require("cors");
const upload = require("express-fileupload")

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(upload());
app.use(cors());
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("server running with port ", port);
})