function validateUserData(req, res, next) {
  if (!req.body) {
    return res
      .status(400)
      .json({ message: "O corpo da requisição não pode estar vazio." });
  }

  const { nome, email, password } = req.body;

  if (!nome || !email || !password) {
    return res.status(400).json({
      message: 'Os campos "nome", "email" e "senha" são obrigatórios.',
    });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "A senha deve ter pelo menos 6 caracteres." });
  }

  next();
}

module.exports = validateUserData;
