const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/TodoList");
const todoSchema = mongoose.Schema({
    todo:String,
    level:String,
    date:{
        type:String,
        default:new Date().toDateString(),
    },
    ispending:{
        type:Boolean,
        default:true,
    }
})
const TodoModel = mongoose.model("Todos",todoSchema);
module.exports = {connection,TodoModel}