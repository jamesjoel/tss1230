const routes = require("express").Router();

routes.use("/api/user", require("../controllers/UserController"));
routes.use("/api/city", require("../controllers/CityController"));
routes.use("/api/owner", require("../controllers/OwnerController"));
routes.use("/api/hotels", require("../controllers/HotelsController"));
routes.use("/api/user/auth", require("../controllers/UserAuthController"));
routes.use("/api/owner/auth", require("../controllers/OwnerAuthController"));


module.exports = routes;
