const express = require('express');
const router = express.Router();
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/taskController');

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
