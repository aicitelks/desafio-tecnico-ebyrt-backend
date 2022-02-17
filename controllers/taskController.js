const rescue = require('express-rescue');
const {
  findAllService,
  insertTaskService,
} = require('../services/taskService');
const { OK } = require('../utils/statusCodes');

const findAllController = async (req, res) => {
  const tasks = await findAllService();

  res.status(200).json(tasks);
};

const insertTaskController = rescue(async (req, res) => {
  const { name } = req.body;

  const newTask = await insertTaskService(name);

  return res.status(OK).json(newTask);
});

module.exports = {
  findAllController,
  insertTaskController,
};
