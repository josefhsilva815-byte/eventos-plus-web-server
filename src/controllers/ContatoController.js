
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
            res.send(`
                    <h1>Obrigado pelo seu contato, ${nome}</h1>
                    <p>Sua mensagem foi registrada e em breve entraremos em contato.</p>
                    <a href="http://localhost:3000">Voltar para Home</a>
                `)
        } catch (error) {
            console.error("Erro ao salvar seu contato:", error);
            res.status(500).send("Erro ao enviar a mensagem. Tente novamente mais tarde.")
        }
    }
}