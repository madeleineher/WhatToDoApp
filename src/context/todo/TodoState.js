import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import TodoReducer from "./todoReducer";
import { v1 as uuidv1 } from "uuid";

import { CREATE_TODO, CHECK_TODO, UNCHECK_TODO, DELETE_TODO } from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [], // this is an array of todos
    current: null, // for updating...
  };

  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // // my actions
  // create a todo
  const createTodo = (todo) => {
    todo.id = uuidv1(); // assiging ID here
    dispatch({ type: CREATE_TODO, payload: todo });
  };

  // update todo

  // check off todo
  const checkTodo = (todo) => {
    dispatch({ type: CHECK_TODO, payload: todo });
  };

  // uncheck todo
  const uncheckTodo = (todo) => {
    dispatch({ type: UNCHECK_TODO, payload: todo });
  };

  // delete todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        current: state.current,
        createTodo,
        checkTodo,
        deleteTodo,
        uncheckTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
