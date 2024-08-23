const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pushkardps8:********%40@cluster0.fid6d.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}