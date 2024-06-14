import React from "react";

const Todos = (todos) => {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>
            <button>
              {todo.complete == true ? "Completed" : "Marked as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
