const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

app.get('/', (_req, res) => {
  res.send('Boas vindas ao desafio Ebyrt!');
});

app.listen(PORT, () => console.log(`Servidor online na porta ${PORT}`));
