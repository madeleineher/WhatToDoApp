import React, { useContext } from "react";
import TodoContext from "../../context/todo/todoContext";

const TodoItem = (todo, id) => {
  const todoContext = useContext(TodoContext);

  return (
    <div key={todo.id} className='todoItems__item'>
      <div>
        <h5 className='todoItems__str'>{todo.todoStr}</h5>
      </div>
      <div>
        <form className='todoItems__form'>
          {/* <input
                  className='todoItem__buttons button'
                  value='Completed'
                  type='submit'
                /> */}
          <input
            className='todoItem__buttons button'
            value='Delete'
            type='submit'
            // onDelete={onDelete}
          />
        </form>
      </div>
    </div>
  );
};

export default TodoItem;
