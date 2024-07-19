const express = require("express");
const todo = require("../Models/TodoModel");

const app = express();

app.use(express.json());

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const result = await todo.create({ title, description });

        res.status(211).json({
            Success: true,
            data: result,
            message: "Entry Successfull"
        })
    }
    catch (err) {
        console.log(err);
        res.Status(505).json({
            Success: false,
            data: "Internal Problem Occured",
            message: err.message,
        });
    }
}
