import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const Todos = () => {
  return (
    <div>
      <TodoItems />
      <TodoForm />
    </div>
  );
};

export default Todos;
