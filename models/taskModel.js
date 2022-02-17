const { ObjectId } = require('mongodb');
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

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();
  const task = await db.collection('tasks').findOne(ObjectId(id));

  return task;
};

const deleteTask = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connect();

  const result = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });

  return result;
};

module.exports = {
  findAll,
  insertTask,
  getById,
  deleteTask,
};
