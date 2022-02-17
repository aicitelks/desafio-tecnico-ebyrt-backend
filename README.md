# Desafio Técnico Ebyrt 🚀
### Repositório do Back-End

Neste repositório encontra-se o desafio técnico desenvolvido na semana da Blitz de Carreira da @Trybe.

Dado o contexto de que era necessário criar uma aplicação para ajudar os colaboradores da empresa Ebyrt a  organizarem melhor as suas tarefas individuais, foi desenvolvida uma aplicação de lista de tarefas.

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
A aplicação roda na porta ```3001```.

## Para executar os testes
Os testes unitários foram implementados em Jest. No terminal, digite o comando
```sh
  npm test
```

---

# Rotas da aplicação
Para testar os endpoints implementados, utilize o cliente HTTP de sua preferência. Sugestão: [Insomnia](https://insomnia.rest/).

* URL local: ```http://localhost:3001```

A rota *GET* ```/tasks``` lista todas as tarefas cadastradas no banco.

A rota *POST* ```/tasks``` permite a criação de uma nova tarefa. Para isso basta informar no corpo da requisição o "nome" dela, como no exemplo:
```
  {
    "name": "Nome da Tarefa"
  }
```

A rota *DELETE* ```/tasks:id``` permite a exclusão da tarefa pelo id. Forneça um ID válido nos parâmetros da rota para excluir a tarefa, bastando substituir o ":id" pelo ID da tarefa.

# Desenvolvimento
O desenvolvimento da API (server) foi realizado utilizando a arquitetura MSC - Models, Services, Controllers.
- *Models* foram implementadas as funções que administram o banco de dados
- *Services* foram implementadas todas as regras de negócio
- *Controllers* foram implementadas todas as requisições. Aqui também foi utilizada a biblioteca ```express-rescue``` para lidar com o tratamento de erros em substituição ao ```try/catch```.

Também foi utilizado o ```router``` para o gerenciamento das rotas.

A aplicação foi baseada na arquitetura MERN (MongoDB, Express, React, Node), sendo ME_N para o back-end.

Para a padronização e qualidade de código foi utilizado o *ES Lint*.

---

### :computer: Implementações futuras
- Implementação do CRUD completo
- Implementação do Front-end com React
- Deploy no Heroku

# Contato
### Letícia Castro
:large_blue_circle: [LinkedIn](https://www.linkedin.com/in/leticiacastro87/)

---

Desenvolvido com ♥ em JavaScript, Node, Express no VS Code | 2022