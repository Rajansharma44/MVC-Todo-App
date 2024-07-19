const Todo=require("../Models/TodoModel");

exports.updateTodo= async (req,res)=>
    {
        try{
            const id= req.params.id;
            const Todos= await Todo.findByIdAndUpdate( {_id:id},
                {
                    title,
                    discription,
                    updatedAt:Date.now(),
                }
            );
            res.status(200).json({
                success:true,
                data:Todo,
                message:"Data  Updated Successfully"
            })
            

        }
        catch(err)
        {
          res.status(500).json(
            {
                success:false,
                data:"Server Error",
                message:err.message,
            }
          )
        }
    }