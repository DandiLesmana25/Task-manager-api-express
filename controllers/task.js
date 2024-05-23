const getAllTasks = (req, res) => {
    res.send('Get All items tasks')
}
const createTasks = (req, res) => {
    res.send('Create tasks')
}
const getTask = (req, res) => {
    res.send('Get  tasks by id')
}
const updateTask = (req, res) => {
    res.send('Update task')
}
const deleteTask = (req, res) => {
    res.send('delete task by id')
}

module.exports = {getAllTasks, createTasks, getTask, updateTask, deleteTask};