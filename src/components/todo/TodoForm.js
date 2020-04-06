import React, { useContext, useState } from "react";
import TodoContext from "../../context/todo/todoContext";
import { v1 as uuidv1 } from "uuid";

const TodoForm = () => {
  const todoContext = useContext(TodoContext);

  const { createTodo } = todoContext;

  const [todo, setTodo] = useState({
    // id: uuidv1(),
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
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='todoStr'
        value={todoStr}
        placeholder='Enter a new to-do !'
        onChange={onChange}
      />
      <input
        type='checkbox'
        name='type'
        value={type}
        checked={type === "priority"}
        onChange={onChange}
      />
      Priority{" "}
      <div>
        <input type='submit' value='Add To-Do !' />
      </div>
    </form>
  );
};

export default TodoForm;
