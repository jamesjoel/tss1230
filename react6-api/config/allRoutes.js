const routes = require("express").Router();

routes.use("/api/comments", require("../controllers/CommentController"));

module.exports = routes;