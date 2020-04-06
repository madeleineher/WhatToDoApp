import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItems = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  return (
    <div className='todoItems_container'>
      <p>hello!</p>
      {todos.length > 0 ? (
        todos.map((todo) => <p>{todo.todoStr}</p>) // need to add key here ?
      ) : (
        <h1>ADD A TODO!</h1>
      )}
    </div>
  );
};

export default TodoItems;
