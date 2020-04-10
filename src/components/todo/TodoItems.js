import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItems = ({ todos }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, checkTodo, uncheckTodo } = todoContext;
  const classStr = "todoItems__str";
  const classPty = "todoItems__pty";

  const onDelete = (todo) => {
    deleteTodo(todo.id);
  };

  const onComplete = (todo) => {
    if (todo.complete === "true") {
      uncheckTodo(todo);
    } else {
      checkTodo(todo);
    }
  };

  return (
    <div className='todoItems_container'>
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className='todoItems__item'>
            <div
              className={
                todo.type === "priority"
                  ? { classPty } + " priority"
                  : { classPty }
              }
            >
              <h4
                className={
                  todo.complete !== "true"
                    ? { classStr }
                    : { classStr } + " crossOut"
                }
              >
                {todo.todoStr}
              </h4>
            </div>
            <p className='todoItems__form'>
              <button
                className='todoItem__buttons button'
                onClick={() => onComplete(todo)}
              >
                Completed
              </button>
              <button
                className='todoItem__buttons button'
                onClick={() => onDelete(todo)}
              >
                Delete
              </button>
            </p>
          </div>
        ))
      ) : (
        <h1 className='todoItems__header'>ADD A TODO!</h1>
      )}
    </div>
  );
};

export default TodoItems;
