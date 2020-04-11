import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import AlertContext from "../../context/alert/alertContext";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);
  const alertContext = useContext(AlertContext);

  const { createTodo } = todoContext;

  const [todo, setTodo] = useState({
    todoStr: "",
    type: "notPriority",
    complete: "false",
  });

  const onChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const { todoStr, type } = todo;

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoStr === "") {
      alertContext.setAlert("Please enter a to-do");
    } else {
      createTodo(todo);
      clearTodoForm();
    }
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
          style={{ border: "1px solid black" }}
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
