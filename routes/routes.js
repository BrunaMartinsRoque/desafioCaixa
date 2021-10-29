const { Router } = require("express");
const express = require("express");

const routes = express.Router();

const index= require("../controllers/index");
const script = require("../controllers/script")

routes.get("/", index.caixa);
routes.post("/caixa", index.caixa);

routes.get("/caixa", index.caixaRedirect);

routes.get("/script", index.script);
routes.post("/script", index.script);




module.exports = routes;