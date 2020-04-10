import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoContext from "../../context/todo/todoContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  return (
    <div className='container'>
      <TodoItems todos={todos} />
      <TodoForm />
    </div>
  );
};

export default Todos;
