const express=require("express");
const router=express.Router();

const { createTodo}=require("../Controllers/CreateTodo");
const { deleteTodo }=require("../Controllers/DeleteTodo");
const {getTodo,GetTodoById}= require("../Controllers/GetTodo");
const {updateTodo}=require("../Controllers/UpdateTodo");



router.post("/createTodo",createTodo);
router.delete("/deleteTodo/:id",deleteTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",GetTodoById);
router.put("/updateTodo/:id",updateTodo);

module.exports = router;