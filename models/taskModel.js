const connect = require('./connection');

const findAll = async () => {
  const db = await connect();

  const tasks = await db.collection('tasks').find().toArray();

  return tasks;
};

const insertTask = async (name) => {
  const db = await connect();

  const { insertedId } = await db.collection('tasks').insertOne({ name });

  return insertedId;
};

module.exports = {
  findAll,
  insertTask,
};
