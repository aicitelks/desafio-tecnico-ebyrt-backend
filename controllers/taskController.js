const rescue = require('express-rescue');
const {
  findAllService,
  insertTaskService,
} = require('../services/taskService');

const {
  OK,
  CREATED,
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

module.exports = {
  findAllController,
  insertTaskController,
};
