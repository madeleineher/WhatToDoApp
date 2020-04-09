import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import { v1 as uuidv1 } from "uuid";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { createTodo } = todoContext;

  const [todo, setTodo] = useState({
    id: uuidv1(),
    todoStr: "",
    type: "nonPriority",
  });

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const { todoStr, type } = todo;

  const onSubmit = (e) => {
    e.preventDefault();
    createTodo(todo);
  };

  return (
    <form className='todoForm' onSubmit={onSubmit}>
      <input
        className='todoForm__input'
        type='text'
        name='todoStr'
        value={todoStr}
        placeholder='Enter A To-Do!'
        onChange={onChange}
      />
      <input
        type='checkbox'
        className='todoForm__pty'
        name='type'
        value={type}
        checked={type === "priority"}
        onChange={onChange}
      />
      <span className='todoForm__ptyTxt'>Priority</span>{" "}
      <div className='todoForm__button'>
        <input className='button' type='submit' value='Add To-Do !' />
      </div>
    </form>
  );
};

export default TodoForm;
