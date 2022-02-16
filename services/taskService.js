const { findAll } = require('../models/taskModel');

const findAllService = async () => findAll();

module.exports = {
  findAllService,
};
