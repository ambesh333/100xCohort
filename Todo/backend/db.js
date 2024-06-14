//6Zs9bGVg2NB8bknt
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://ambeshgaunker:6Zs9bGVg2NB8bknt@cluster0.cvlu0wv.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
