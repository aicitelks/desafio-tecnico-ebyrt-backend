const express = require('express');
const cors = require('cors');
const router = require('./routes/index');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (_req, res) => {
  res.send('Boas vindas ao desafio Ebyrt!');
});

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
