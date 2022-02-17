const frisby = require('frisby');
const {
  OK,
  BAD_REQUEST,
  CREATED,
} = require('../utils/statusCodes');
/* const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_URL = process.env.HOST || 'mongodb://localhost:27017/';
const DB_NAME = 'Ebyrt';
const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}; */
const URL = 'http://localhost:3001';

describe('GET /tasks', () => {
/*   let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(DB_URL, DB_OPTIONS);
    db = connection.db(DB_NAME);
  });

  afterAll(async () => {
    await connection.close();
  }); */

  it('Valida se todas as tarefas estão sendo listadas', async () => {
    await frisby
      .get(`${URL}/tasks`)
      .expect('status', OK)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);

        expect(result[0].name).toBe('Terminar o desafio até dia 17/02');
        expect(result[1].name).toBe('Tarefa 2');
      });
  });
});

describe('POST /tasks', () => {
  it('Valida se "name" é obrigatório', async () => {
    await frisby
      .post(`${URL}/tasks`, {})
      .expect('status', BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);

        expect(result.message).toContain('required');
      });
  });

  it('Valida se "name" é uma string', async () => {
    await frisby
      .post(`${URL}/tasks`, {
        name: 12345,
      })
      .expect('status', BAD_REQUEST)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);

        expect(result.message).toContain('must be a string');
      });
  });

  it('Valida se é possível inserir uma tarefa', async () => {
    await frisby
      .post(`${URL}/tasks`, {
        name: 'Blitz Chalenge - prazo final 17/02 às 12h',
      })
      .expect('status', CREATED)
      .then((response) => {
        const { body } = response;
        const result = JSON.parse(body);

        expect(typeof result).toBe('object');
        expect(result).toHaveProperty('newTask');
        expect(result.newTask).toHaveProperty('name');
        expect(result.newTask.name).toBe('Blitz Chalenge - prazo final 17/02 às 12h');
      });
  });
});

// teste
