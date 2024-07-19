const Todo = require("../Models/TodoModel");

exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(205).json(
            {
                success: true,
                data: todos,
                message: "Data Fetched Successfully"
            }
        )
    }
    catch (err) {

        res.status(505).json({
            status: false,
            data: "Server Error",
            message: err.message,
        })
    }
}

exports.GetTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todos = await Todo.findById({ _id: id });
        if (!todo) {
            res.status(400).json(
                {
                    success: false,
                    message: "No data found",
                }
            )
        }
        res.status(200).json({
            status:true,
            data:todo,
            message:"Data fetched Successfully"
        })

    } catch (err) {
        res.status(500).json({
            status:false,
            data:"Server Error",
            message:err.message,
        })
    }
}