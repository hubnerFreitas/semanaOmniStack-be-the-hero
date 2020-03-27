const express = require("express");
const OngController = require("./controller/OngController")
const IncidentController = require("./controller/IncidentController")
const ProfilerController = require("./controller/ProfilerController")
const SessionController = require("./controller/SessionController")

const routes = express.Router();

routes.post("/session", SessionController.login)

routes.get("/ongs", OngController.list);
routes.post("/ongs", OngController.create);

routes.get("/incidents", IncidentController.list);
routes.post("/incidents", IncidentController.create)
routes.delete("/incidents/:id", IncidentController.delete)

routes.get("/profile", ProfilerController.index)

module.exports = routes;