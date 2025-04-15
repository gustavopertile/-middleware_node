const express = require("express");

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
});

app.use(express.json());

const validateUserData = require("./middlewares/validateUserData");

app.post("/create-user", validateUserData, (req, res) => {
  res
    .status(200)
    .json({ mensagem: "Usuário criado com sucesso!", dados: req.body });
});
