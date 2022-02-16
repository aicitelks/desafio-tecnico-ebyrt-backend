const { findAllService } = require('../services/taskService');

const findAllController = async (req, res) => {
  const tasks = await findAllService();

  res.status(200).json(tasks);
};

module.exports = {
  findAllController,
};
