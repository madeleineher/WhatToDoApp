import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItems = ({ todos }) => {
  const todoContext = useContext(TodoContext);
  const { deleteTodo, checkTodo, uncheckTodo } = todoContext;
  // const classStr = "todoItems__str";

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
                  ? "todoItems__str priority"
                  : "todoItems__str"
              }
            >
              <h3 className={todo.complete !== "true" ? "" : "crossOut"}>
                {todo.todoStr}
              </h3>
            </div>
            <div className='todoItems__buttons'>
              <button
                className='todoItem__button button'
                onClick={() => onComplete(todo)}
              >
                Completed
              </button>
              <button
                className='todoItem__button button'
                onClick={() => onDelete(todo)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className='todoItems__header'>ADD A TODO!</h1>
      )}
    </div>
  );
};

export default TodoItems;
