
const express = require("express");

const HomeController = require("../controllers/HomeController.js");
const ServicosController = require("../controllers/ServicosController.js");
const PortfolioController = require("../controllers/PortfolioController.js");
const ContatoController = require("../controllers/ContatoController.js");

const router = express.Router();

router.get("/", HomeController.index);
router.get("/servicos", ServicosController.index);
router.get("/portfolio", PortfolioController.index);
router.get("/contato", ContatoController.index);
router.post("/contato", ContatoController.send);

module.exports = router;