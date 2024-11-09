// controllers/authController.js
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create(username, password);
    res.redirect('/login');
  } catch (err) {
    res.status(500).send('Erro ao registrar o usuário');
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user.id;
    res.redirect('/dashboard');
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};

exports.dashboard = (req, res) => {
  if (!req.session.userId) return res.redirect('/login');
  res.send('Bem-vindo ao seu dashboard!');
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/login');
};
