const Joi = require('joi');

const {
  findAll,
  insertTask,
} = require('../models/taskModel');

const taskSchema = Joi.object({
  name: Joi.string().required(),
});

const findAllService = async () => findAll();

const insertTaskService = async (name) => {
  const { error } = taskSchema.validate({ name });
  if (error) throw error;

  const newTask = await insertTask(name);

  return newTask;
};

module.exports = {
  findAllService,
  insertTaskService,
};
