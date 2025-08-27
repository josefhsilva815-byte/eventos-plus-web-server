const express = require("express");
const path = require("node:path");
const router = require("./src/routes/index.js");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3333 ;

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", router);

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
});