const Joi = require('joi');

const {
  findAll,
  insertTask,
  getById,
  deleteTask,
} = require('../models/taskModel');

const { NOT_FOUND, NOT_FOUND_MSG } = require('../utils/statusCodes');

const taskSchema = Joi.object({
  name: Joi.string().required(),
});

const findAllService = async () => findAll();

const insertTaskService = async (name) => {
  const { error } = taskSchema.validate({ name });
  if (error) throw error;

  const id = await insertTask(name);

  return { newTask: { id, name } };
};

const getByIdService = async (id) => {
  const task = await getById(id);

  if (!task) {
    const errorId = { code: NOT_FOUND, message: NOT_FOUND_MSG };
    throw errorId;
  }

  return task;
};

const deleteTaskService = async (id) => {
  const tasksExist = await getByIdService(id);

  if (tasksExist) await deleteTask(id);

  return tasksExist;
};

module.exports = {
  findAllService,
  insertTaskService,
  deleteTaskService,
};
