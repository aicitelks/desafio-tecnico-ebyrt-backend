const connect = require('./connection');

const findAll = async () => {
  const db = await connect();

  const tasks = await db.collection('tasks').find().toArray();

  return tasks;
};

module.exports = {
  findAll,
};
