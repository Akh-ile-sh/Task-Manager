const getAllTasks = (req, res) => {
  res.send("all items");
};
const createNewTask = (req, res) => {
  res.json(req.body);
};
const singleTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update the task");
};
const deleteTasks = (req, res) => {
  res.send("delete the task");
};

module.exports = {
  getAllTasks,
  createNewTask,
  singleTask,
  updateTask,
  deleteTasks,
};
