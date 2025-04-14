function validateUserData(req, res, next) {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res
      .status(400)
      .json({ erro: 'Os campos "nome" e "email" são obrigatórios.' });
  }

  next();
}

module.exports = validateUserData;
