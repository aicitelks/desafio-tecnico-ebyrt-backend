const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (_req, res) => {
  res.send('Boas vindas ao desafio Ebyrt!');
});

// QUANDO UMA ROTA NÃO EXISTE
app.all('*', (req, res) => res
  .status(404)
  .json({ message: `A rota: '${req.path}' não existe!` }));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
