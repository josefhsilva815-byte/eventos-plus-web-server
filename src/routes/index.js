
const express = require("express");

const HomeController = require("../controllers/HomeController.js");
const router = express.Router();

router.get("/", HomeController.index);
// router.get("/servicos", ServicosController.index);
// router.get("/portfolio", PortfolioController.index);
// router.get("/contato", ContatoController.index);

module.exports = router;