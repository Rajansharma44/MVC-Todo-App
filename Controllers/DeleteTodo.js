const Todo=require("../Models/TodoModel");

exports.deleteTodo =async (req,res)=>
    {
        try{
            const {id}=req.params;
            await Todo.findByIdAndDelete(id);

            res.status(209).json(
                {
                    Success:true,
                    Message:"Todo Deleted"
                }
            )
        }
        catch(err){
          res.status(505).json(
            {
                Success:false,
                data:"Server Error",
                Message:err.Message,
            }
          )
          
        }
    }