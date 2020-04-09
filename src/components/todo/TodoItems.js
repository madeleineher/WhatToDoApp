import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItems = () => {
  const todoContext = useContext(TodoContext);

  const { todos } = todoContext;

  return (
    <div className='todoItems_container'>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} className='todoItems__item'>
            <div>
              <h5 className='todoItems__str'>{todo.todoStr}</h5>
            </div>
            <div>
              <form className='todoItems__form'>
                <input
                  className='todoItem__buttons button'
                  value='Completed'
                  type='submit'
                />
                <input
                  className='todoItem__buttons button'
                  value='Delete'
                  type='submit'
                />
              </form>
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
