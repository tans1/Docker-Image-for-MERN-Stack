const Tasks = require("../model/model");

const GetAll = async (req, res, next) => {
  try {
    const tasks = await Tasks.find().exec();
    return res.status(200).json({
      status: "success",
      data: tasks
    });
  } catch (e) {
    const err = new Error("unable to fetch data");
    next(err);
  }
};

const AddTask = async (req, res, next) => {
  try {
    const { title } = req.body;
    const task = new Tasks({ title: title });
    await task.save();

    return res.status(200).json({
      status: "success",
      message: "task added successfully"
    });
  } catch (e) {
    const err = new Error(e.message);
    err.status = "failure";
    err.statusCode = 404;
    next(err);
  }
};

module.exports = {
  GetAll,
  AddTask
};
