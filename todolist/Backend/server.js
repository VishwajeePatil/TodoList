const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const {connection,TodoModel} = require("./db")
const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.text())

app.post("/add_todo",async(req,res)=>{
    const {todo,level} = req.body;
    const new_todo = new TodoModel({
        todo,
        level,
    })
    await new_todo.save();
    console.log(new_todo)
    console.log("Todo Added SuccessFully")

})

app.get("/get_todo",async(req,res)=>{
    const todos = await TodoModel.find({date:new Date().toDateString()})
    res.send(todos)
})
app.get("/history",async(req,res)=>{
    const todos = await TodoModel.find()
    res.send(todos)
})
app.post("/update_todo",async(req,res)=>{
    const {id} = req.body;
    const todo = await TodoModel.findOne({_id:id})
    const updated = await TodoModel.updateOne({ _id: id }, { $set: { ispending: !(todo.ispending) } });
    console.log(updated)
})
app.listen(8000,async()=>{
    console.log("Server IS Live")
    await connection;
    console.log("DB Connected")
})