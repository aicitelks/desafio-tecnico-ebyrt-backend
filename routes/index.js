const express = require('express');

const router = express.Router();

const {
  findAllController,
} = require('../controllers/taskController');

router.get('/tasks', findAllController);

module.exports = router;
