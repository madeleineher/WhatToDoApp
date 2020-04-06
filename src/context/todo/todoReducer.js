import {
  CREATE_TODO,
  UPDATE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  CHECK_TODO,
  UNCHECK_TODO,
  DELETE_TODO,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };
    default:
      return state;
  }
};
