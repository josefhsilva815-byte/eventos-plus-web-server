
const path = require("node:path");
const db = require("../database/config")

module.exports = {
    index: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/contato.html"))
    },
    send: async (req, res) => {
        const {nome , email, whatsapp, mensagem} = req.body;
        try {
            (await db("contatos").insert({nome, email, whatsapp, mensagem}));
            console.log("📩 Novo contato salvo no banco de dados");
            res.sendFile(path.join(__dirname, "../views/agradecimento.html"))
        } catch (error) {
            console.error("Erro ao salvar seu contato:", error);
            res.status(500).send("Erro ao enviar a mensagem. Tente novamente mais tarde.")
        }
    }
}