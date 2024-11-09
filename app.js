// app.js
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Configuração do template EJS
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secreta-chave-para-o-sessao',
  resave: false,
  saveUninitialized: false
}));

app.use(routes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
