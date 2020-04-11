import React, { useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import TodoContext from "../../context/todo/todoContext";

import AlertContext from "../../context/alert/alertContext";

const Todos = () => {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;

  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;

  const container = "container";
  const containerAlert = "container containerAlert";

  return (
    <div className={alert !== null ? containerAlert : container}>
      <TodoItems todos={todos} />
      <TodoForm />
    </div>
  );
};

export default Todos;
