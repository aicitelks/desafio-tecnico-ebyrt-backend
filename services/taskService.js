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

  const id = await insertTask(name);

  return { newTask: { id, name } };
};

module.exports = {
  findAllService,
  insertTaskService,
};
