import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

const Todos = () => {
  return (
    <div className='container'>
      <TodoItems />
      <TodoForm />
    </div>
  );
};

export default Todos;
