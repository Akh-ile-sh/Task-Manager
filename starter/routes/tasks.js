const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createNewTask,
  singleTask,
  updateTask,
  deleteTasks,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(createNewTask);
router.route("/:id").get(singleTask).patch(updateTask).delete(deleteTasks);

module.exports = router;
