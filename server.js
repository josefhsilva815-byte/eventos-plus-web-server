const express = require("express");
const db = require("./src/database/config.js");
const router = require("./src/routes/index.js");

const app = express();
app.use(express.json());

app.use("/", router)

app.listen(3000, () => {
    console.log("Servidor rodando na porta http://localhost:3000");
})