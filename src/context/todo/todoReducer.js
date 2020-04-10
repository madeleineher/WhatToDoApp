import {
  CREATE_TODO,
  DELETE_TODO,
  // UPDATE_TODO,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  CHECK_TODO,
  UNCHECK_TODO,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return Object.assign({}, todo, {
              complete: "true",
            });
          }
          return todo;
        }),
      };
    case UNCHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return Object.assign({}, todo, {
              complete: "false",
            });
          }
          return todo;
        }),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
