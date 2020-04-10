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
  console.log(type);
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
        <input className='button' type='submit' value='Add To-Do !' />
      </div>
    </form>
  );
};

export default TodoForm;
