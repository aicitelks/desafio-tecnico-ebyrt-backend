const rescue = require('express-rescue');
const {
  findAllService,
  insertTaskService,
  deleteTaskService,
} = require('../services/taskService');

const {
  OK,
  CREATED,
  NO_CONTENT,
} = require('../utils/statusCodes');


const findAllController = rescue(async (_req, res) => {
  const tasks = await findAllService();

  res.status(OK).json(tasks);
});

const insertTaskController = rescue(async (req, res) => {
  const { name } = req.body;

  const newTask = await insertTaskService(name);

  return res.status(CREATED).json(newTask);
});

const deleteTaskController = rescue(async (req, res) => {
  const { id } = req.params;
  await deleteTaskService(id);

  return res.status(NO_CONTENT).end();
});

module.exports = {
  findAllController,
  insertTaskController,
  deleteTaskController,
};
