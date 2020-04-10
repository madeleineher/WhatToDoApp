import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
// import { v1 as uuidv1 } from "uuid";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { createTodo } = todoContext;

  const [todo, setTodo] = useState({
    // id: uuidv1(),
    todoStr: "",
    type: "notPriority",
    complete: "false",
  });

  const onChange = (e) => {
    //  !!! come back and add alert context for empty to-do case
    // if (e.target.name === 'todoStr' && e.target.value === '')
    // {
    // } else {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    // }
  };

  const { todoStr, type } = todo;

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
    clearTodoForm();
  };

  const clearTodoForm = () => {
    setTodo({
      todoStr: "",
      type: "notPriority",
      complete: "false",
    });
  };

  return (
    <form className='todoForm' onSubmit={onSubmit}>
      <div className='todoForm__input'>
        <input
          className='todoForm__inputForm'
          type='text'
          name='todoStr'
          value={todoStr}
          placeholder='Enter A To-Do !'
          onChange={onChange}
        />
      </div>
      <div className='todoForm__check pretty p-jelly'>
        <input
          type='checkbox'
          name='type'
          value={type !== "priority" ? "priority" : "notPriority"}
          checked={type === "priority"}
          onChange={onChange}
        />
        <div className='state p-success'>
          <label style={{ fontWeight: "900" }}>Priority</label>
        </div>
      </div>

      <div className='todoForm__button'>
        <button
          className='todoForm__btn button'
          type='submit'
          value='add'
          name='add'
        >
          Add To-Do <span className='exclaim'>!</span>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
