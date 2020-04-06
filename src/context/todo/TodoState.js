import React, { useReducer } from "react";
import TodoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { v1 as uuidv1 } from "uuid";

import {
  CREATE_TODO,
  CHECK_TODO,
  UPDATE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  UNCHECK_TODO,
  DELETE_TODO,
} from "../types";

const TodoState = (props) => {
  const initialState = {
    todos: [], // this is an array of todos
    current: null, // for updating
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  // // my actions
  // create a todo
  const createTodo = (todo) => {
    todo.id = uuidv1();
    dispatch({ type: CREATE_TODO, payload: todo });
  };

  // update todo

  // check off todo

  // uncheck todo

  // delete todo
  const deleteTodo = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        // id: /
        todos: state.todos,
        current: state.current,
        createTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
