# Desafio Técnico Ebyrt
### Repositório do Banck-End

Neste repositório encontra-se o desafio técnico desenvolvido para na semana da Blitz de Carreira da @Trybe.

Dado o contexto de que era necessário criar uma aplicação para ajudar os colaboradores da empresa Ebyrt a  organizarem melhor as suas tarefas individuais, foi desenvolvida uma aplicação de lista de tarefas.

O Back-End foi feito em NodeJS, com MongoDB.

---

# Instruções
## Para executar a aplicação

Certifique-se de possuir o `Node.js` instalado.

No terminal execute os comandos à seguir:

1. Clone o repositório
```sh
  git clone git@github.com:aicitelks/desafio-tecnico-ebyrt-backend.git
```

2. Acesse a pasta
```sh
  cd desafio-tecnico-ebyrt-backend
```

3. Instale as dependências
```sh
  npm install
```

4. Execute o servidor da aplicação
```sh
  npm start
```

Para testar os endpoints implementados, utilize o cliente HTTP de sua preferência. Sugestão: [Insomnia](https://insomnia.rest/).

* URL local: ```http://localhost:3001/tasks```

## Para executar os testes
Os testes unitários foram implementados em Jest. No terminal, digite o comando
```sh
  npm test
```

# Rotas da aplicação
A rota *GET* ```/taks``` lista todas as tarefas cadastradas no banco.

A rota *POST* ```/tasks``` permite a criação de uma nova tarefa. Para isso basta informar no corpo da requisição o "nome" dela, como no exemplo:
```
  {
    "name": "Nome da Tarefa"
  }
```
# Desenvolvimento
O desenvolvimento da API (server) foi realizado utilizando a arquitetura MSC - Models, Services, Controllers.
- *Models* foram implementadas as funções que administram o banco de dados
- *Services* foram implementadas todas as regras de negócio
- *Controllers* foram implementadas todas as requisições. Aqui também foi utilizada a biblioteca ```express-rescue``` para lidar com o tratamento de erros em substituição ao ```try/catch```.

Também foi utilizado o ```router``` para o gerenciamento das rotas.

A aplicação foi baseada na arquitetura MERN (MongoDB, Express, React, Node).

No back-end foi utilizado o framework Node.js com Express. 

Para a padronização e qualidade de código foi utilizado o *ES Lint*.

Desenvolvido com ♥ em JavaScript, Node, Express no VS Code.