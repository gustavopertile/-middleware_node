const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const validateUserData = require("./middlewares/validateUserData");

app.post("/usuarios", validateUserData, (req, res) => {
  res
    .status(200)
    .json({ mensagem: "Usuário criado com sucesso!", dados: req.body });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
