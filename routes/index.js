const express = require('express');

const router = express.Router();

const {
  findAllController,
  insertTaskController,
} = require('../controllers/taskController');

router.get('/tasks', findAllController);
router.post('/tasks', insertTaskController);

module.exports = router;
