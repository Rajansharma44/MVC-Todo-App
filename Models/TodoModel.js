const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 20
        },
        description: {
            type: String,
            required: true,
            maxLength: 50
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

const todoModel = mongoose.model("ToDo", todoSchema);
module.exports = todoModel;
