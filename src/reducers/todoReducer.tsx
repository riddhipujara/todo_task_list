import { Reducer } from "redux";
import { storeType } from "../types/storeType";
import {
  createTodoAction,
  updateTodoAction,
  deleteTodoAction,
} from "../types/actionsType";

type actions = createTodoAction | updateTodoAction | deleteTodoAction;

const initialState: storeType = {
  todos: [],
};

const todoReducer: Reducer<storeType, actions> = (
  state: Readonly<storeType> = initialState,
  action
) => {
  switch (action.type) {
    case "CREATE_TODO_SUCCESS":
      return {
        todos: [...state.todos, action.todo],
      };
    case "UPDATE_TODO_SUCCESS":
      const objIndex = state.todos.findIndex(
        (item) => item.id === action.todo.id
      );
      state.todos[objIndex] = {
        ...action.todo,
      };
      return {
        todos: [...state.todos],
      };
    case "DELETE_TODO_SUCCESS":
      const updatedArr = state.todos.filter(
        (item) => item.id !== action.todoId
      );
      return {
        todos: [...updatedArr],
      };
    default:
      return state;
  }
};

export default todoReducer;
