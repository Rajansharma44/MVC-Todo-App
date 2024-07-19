const express= require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 3000;

app.use(express.json());


const todoRoutes =require("./Router/routes")
app.use("/api/v1",todoRoutes);

const dbConnect=require("./Config/Database");
dbConnect();


app.listen(PORT,()=>
{
    console.log("Server is Started");
})