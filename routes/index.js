const express = require('express');

const router = express.Router();

const {
  findAllController,
  insertTaskController,
  deleteTaskController,
} = require('../controllers/taskController');

router.get('/tasks', findAllController);
router.post('/tasks', insertTaskController);
router.delete('/tasks/:id', deleteTaskController);

module.exports = router;
