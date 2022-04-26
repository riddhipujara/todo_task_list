import {
  createTodoActionCreator,
  updateTodoActionCreator,
  deleteTodoActionCreator,
} from "../types/actionCreatorType";
import { IArr } from "../types/storeType";

export const createTodo: createTodoActionCreator = (todo: IArr) => {
  return {
    type: "CREATE_TODO_SUCCESS",
    todo,
  };
};

export const updateTodo: updateTodoActionCreator = (todo: IArr) => {
  return {
    type: "UPDATE_TODO_SUCCESS",
    todo,
  };
};

export const deleteTodo: deleteTodoActionCreator = (todoId: string) => {
  return {
    type: "DELETE_TODO_SUCCESS",
    todoId,
  };
};
