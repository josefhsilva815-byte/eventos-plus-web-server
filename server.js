const express = require("express");
const path = require("node:path");
const router = require("./src/routes/index.js");

const app = express();
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static(path.join(__dirname, "src/public")));

app.use("/", router);

app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000");
});