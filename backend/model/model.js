const mongoose = require('mongoose')

const TaskModel = new mongoose.Schema({
    title : String
})

const Tasks = mongoose.model("TaskModel", TaskModel)
module.exports = Tasks